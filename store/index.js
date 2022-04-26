export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async nuxtServerInit({ commit, getters, dispatch }, { app, redirect }) {
    try {
      const token = app.$cookies.get("token");
      if (token) await dispatch("auth/me", token);
    } catch (e) {
      console.log(e);
    }
  },
};
