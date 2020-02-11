<template>
  <div v-if="draftReports.length">
    <v-data-table
      v-model="selected"
      :headers="tableHeaders"
      :items="draftReports"
      :items-per-page="5"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.type }}</td>
          <td>{{ row.item.name }}</td>
          <td>{{ row.item.area }}</td>
          <td>
            <v-btn @click="editRecord(row.index)"
              >Edit</v-btn
            >
          </td>
        </tr>
      </template>
    </v-data-table>
    <fe-edit-modal v-model="showModal" :selected="selected" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import EditModal from "../../components/reports/EditModal";

export default {
  name: "FeEditorReport",
  data() {
    return {
      showModal: false,
      selected: undefined
    };
  },
  components: {
    FeEditModal: EditModal
  },
  computed: {
    ...mapState(["draftReports"]),
    tableHeaders() {
      const entity = this.draftReports[0];
      const headers = Object.keys(entity);
      headers.push("Actions");

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
  methods: {
    editRecord(index) {
      this.selected = this.draftReports[index];
      this.showModal = true;
    }
  }
};
</script>
