<template>
  <div>
    <v-btn @click="active = 'sales'">Create Sales Report</v-btn>
    <v-btn @click="active = 'rental'">Create Rental Report</v-btn>
    <fe-rental-report v-if="active === 'rental'" />
    <fe-sales-report v-if="active === 'sales'" />
  </div>
</template>

<script>
import RentalReport from "../../components/reports/RentalReport";
import SalesReport from "../../components/reports/SalesReport";
export default {
  name: "CreateReport",
  components: {
    FeRentalReport: RentalReport,
    FeSalesReport: SalesReport
  },
  data() {
    return {
      active: undefined
    };
  }
};
</script>
