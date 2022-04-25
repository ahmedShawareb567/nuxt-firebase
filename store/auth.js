import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  verifyIdToken,
} from "firebase/auth";

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
      const { user } = await createUserWithEmailAndPassword(
        this.app.$fire.auth,
        payload.email,
        payload.password
      );
      if (user) {
        commit("SET_USER", user);
        commit("SET_TOKEN", user.accessToken);
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
      const { user } = await signInWithEmailAndPassword(
        this.app.$fire.auth,
        payload.email,
        payload.password
      );
      if (user) {
        commit("SET_USER", user);
        commit("SET_TOKEN", user.accessToken);

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

  async logout({ commit }) {},

  async me({ commit }) {
    try {
      this.app.$fire.auth.onAuthStateChanged((user) => {
        commit("SET_USER", user);
        commit("SET_TOKEN", user.accessToken);
      });
    } catch (e) {
      return {
        success: false,
        message: e,
      };
    }
  },
};
