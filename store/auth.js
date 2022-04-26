import jwt_decode from "jwt-decode";

const trimError = (error) => {
  return error.split("/")[1].replaceAll("-", " ");
};

export const state = () => ({
  user: null,
  token: null,
});

export const getters = {
  GET_USER: (state) => state.user,
  IS_AUTH: (state) => (state.user && true) || false,
};

export const mutations = {
  SET_USER: (state, payload) => {
    state.user = payload;
  },
  SET_TOKEN: (state, payload) => {
    state.token = payload;
  },
};

export const actions = {
  async register({ commit }, payload) {
    try {
      const { user } = await this.app.$fire.auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      );
      if (user) {
        commit("SET_USER", user);
        commit("SET_TOKEN", user.accessToken);
        this.app.$cookies.set("token", user.accessToken);

        this.app.$fire.auth.sendEmailVerification(
          this.app.$fire.auth.currentUser
        );
        return {
          success: true,
          message: "Register successfully",
        };
      }
    } catch (e) {
      return {
        success: false,
        message: trimError(e.code),
      };
    }
  },

  async login({ commit }, payload) {
    try {
      const { user } = await this.app.$fire.auth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      );
      if (user) {
        commit("SET_USER", user);
        const token = await this.$fire.auth.currentUser.getIdToken();

        commit("SET_TOKEN", token);

        this.app.$cookies.set("token", token);

        return {
          success: true,
          message: "Login successfully",
        };
      }
    } catch (e) {
      return {
        success: false,
        message: trimError(e.code),
      };
    }
  },

  logout({ commit }) {
    try {
      this.app.$fire.auth.signOut();
      commit("SET_USER", null);
      commit("SET_TOKEN", null);
    } catch (e) {
      console.log(e);
    }
  },

  async me({ commit }, payload) {
    try {
      const decoded = jwt_decode(payload);
      commit("SET_USER", decoded);
    } catch (e) {
      return {
        success: false,
        message: e,
      };
    }
  },
};
