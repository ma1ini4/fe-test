<template>
  <div v-if="reports.length">
    <v-btn @click="routerRedirect({ name: 'CreateReport' })"
      >Create Report</v-btn
    >
    <v-btn @click="routerRedirect({ name: 'EditReport' })"
      >Edit Report</v-btn
    >
    <v-data-table
      :headers="tableHeaders"
      :items="reports"
      :items-per-page="5"
      item-key="name"
      show-select
      class="elevation-1"
    />
  </div>
</template>

<script>
import httpClient from "../../services/httpClient";
import { feRedirect } from "../../mixins/feRedirect";

const END_POINT = "/reports";

export default {
  name: "FeReportsList",
  mixins: [feRedirect],
  data() {
    return {
      reports: []
    };
  },
  computed: {
    tableHeaders() {
      const entity = this.reports[0];
      const headers = Object.keys(entity);
      return entity
        ? headers.map(header => {
            return {
              value: header,
              text: header.toUpperCase()
            };
          })
        : [];
    }
  },
  mounted() {
    httpClient.get(END_POINT).then(response => {
      if (response.status === 200) {
        this.mutateReportsData(response.data);
      }
    });
  },
  methods: {
    mutateReportsData(reports) {
      this.reports = reports;
    }
  }
};
</script>
