<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card>
      <v-card-actions>
        <v-btn color="primary" text @click.stop="show = false">Close</v-btn>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="selected.name"
              label="Name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="selected.area"
              label="Area"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3" v-if="selected.phone">
            <v-text-field
              v-model="selected.area"
              label="Area"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-btn @click="saveRecord">Save</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "FeEditModal",
  props: {
    value: Boolean,
    selected: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    saveRecord() {
      this.$store.commit("updateDraftReport", this.selected);
    }
  }
};
</script>
