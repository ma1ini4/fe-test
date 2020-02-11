import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: undefined,
    draftReports: [
      {
        type: 12312,
        name: 123123,
        area: 123123,
      }
    ]
  },
  mutations: {
    loadUser(state, user) {
      state.user = user;
    },
    saveDraftReport(state, draft) {
      state.draftReports.push(draft);
    },
    updateDraftReport(state, draft) {
      state.draftReports[draft.index] = draft;
    }
  },
  actions: {},
  modules: {}
});
