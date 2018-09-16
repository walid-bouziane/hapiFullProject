<template>
  <div class="searchBar">
    <md-field v-for="(crime, index) in tabSearch"
              :key="index">
      <label>{{crime.data}}</label>
      <md-input v-model="tabSearch[index].value"></md-input>
    </md-field>
  </div>
</template>


<script>
// import Vue from "vue";

export default {
  // { "_id" : ObjectId("5b993e321c6f0735b81a3572"), "compnos" : 152038722, "naturecode" : "MVA", "incident_type_description" : "MVAcc", "main_crimecode" : "MVAcc", "reptdistrict" : "E13",
  // "reportingarea" : 0, "fromdate" : "2015-05-12T06:00:00", "weapontype" : "Other", "shooting" : "False", "domestic" : "False", "shift" : "Last", "year" : 2015, "month" : 5,
  // "day_week" : "Tuesday", "ucrpart" : "Other", "x" : 760592.1395, "y" : 2934324.064, "streetname" : "HYDE\n PARK AV", "xstreetname" : "WELD HILL ST", "location" : "(42.29928636, -71.11399955)" }

  name: "saisie",
  data() {
    return {
      tabSearch: [
        { data: "_id", value: "" },
        { data: "compnos", value: "" },
        { data: "naturecode", value: "" },
        { data: "incident_type_description", value: "" },
        { data: "main_crimecode", value: "" },
        { data: "reptdistrict", value: "" },
        { data: "reportingarea", value: "" },
        { data: "fromdate", value: "" },
        { data: "weapontype", value: "" },
        { data: "shooting", value: "" },
        { data: "domestic", value: "" },
        { data: "year", value: "" },
        { data: "month", value: "" },
        { data: "day_week", value: "" },
        { data: "ucrpart", value: "" },
        { data: "x", value: "" },
        { data: "y", value: "" },
        { data: "streetname", value: "" },
        { data: "xstreetname", value: "" },
        { data: "location", value: "" }
      ]
    };
  },
  components: {},
  props: [],
  methods: {},
  mounted() {}
};
// url("~/assets/image/connexionBackground.png")
</script>

<style>
.searchBar {
  width: 30%;
  float: left;
  padding-right: 5%;
  padding-left: 5%;
}
.logo {
  width: 80%;
}
.myHeaderImage {
  width: 80%;
}
</style>
