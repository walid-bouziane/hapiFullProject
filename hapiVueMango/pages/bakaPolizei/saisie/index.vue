<template>
  <md-content class="md-scrollbar">
    <baka-polizei-header></baka-polizei-header>
    <navbar></navbar>
    <md-table>
      <md-table-row>
        <md-table-cell>_id</md-table-cell>
        <md-table-cell>
          <md-field>
            <label>Initial Value</label>
            <md-input v-model="initial"></md-input>
          </md-field>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>compnos</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>naturecode</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>incident_type_description</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>main_crimecode</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>reptdistrict</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>reportingarea</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>fromdate</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>weapontype</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>shooting</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>domestic</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>shift</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>year</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>month</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>day_week</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>ucrpart</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>x</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>y</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>streetname</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>xstreetname</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>location</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
    </md-table>
  </md-content>
</template>


<script>
// import Vue from "vue";
import bakaPolizeiHeader from "~/components/bakaPolizeiHeader.vue";
import navbar from "~/components/navigationBar.vue";

export default {
  name: "saisie",
  data() {
    return {
      tab: []
    };
  },
  components: { bakaPolizeiHeader, navbar },
  props: [],
  methods: {},
  mounted() {}
};
</script>
