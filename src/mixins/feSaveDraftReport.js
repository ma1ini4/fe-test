export const feSaveDraftReport = {
  methods: {
    saveDraftReport(draft) {
      this.$store.commit("saveDraftReport", draft);
    }
  }
};
