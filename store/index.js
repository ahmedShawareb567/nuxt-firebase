export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async nuxtServerInit({ commit, getters, dispatch }, { app, redirect }) {
    try {
      dispatch("auth/me");
    } catch (e) {
      console.log(e);
    }
  },
};
