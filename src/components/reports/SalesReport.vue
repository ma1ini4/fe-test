<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field v-model="name" label="Name" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="area" label="Area" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-btn @click="createReport">Send</v-btn>
        </v-col>
      </v-row>
      <v-alert type="success" v-if="success">
        Success
      </v-alert>
    </v-container>
  </v-form>
</template>

<script>
import httpClient from "../../services/httpClient";
import { feAlert } from "../../mixins/feAlert";
import { feSaveDraftReport } from "../../mixins/feSaveDraftReport";

const END_POINT = "reports/sales";
const TYPE = "sale";

export default {
  name: "FeSalesReport",
  mixins: [feAlert, feSaveDraftReport],
  data() {
    return {
      name: undefined,
      area: undefined
    };
  },
  methods: {
    createReport() {
      httpClient
        .post(END_POINT, {
          name: this.name,
          area: this.area
        })
        .then(response => {
          if (response.status === 200) {
            this.toggleSuccess();
            this.setIntervalForSuccess();
            this.saveDraftReport({
              type: TYPE,
              name: this.name,
              area: this.area
            });
          }
        });
    }
  }
};
</script>
