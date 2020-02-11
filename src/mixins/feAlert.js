export const feAlert = {
  data() {
    return {
      success: false
    };
  },
  methods: {
    toggleSuccess() {
      this.success = true;
    },
    setIntervalForSuccess() {
      const interval = setInterval(() => {
        this.success = false;
        clearInterval(interval);
      }, 1000);
    }
  }
};
