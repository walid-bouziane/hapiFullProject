
<template>
  <div>
    <baka-polizei-header></baka-polizei-header>
    <navbar></navbar>
    <div style="margin-top: 7%;">
      <searchbar></searchbar>
      <div class="bloc">
        ici est la page après la connexion, Forcer l’identification de chaque utilisateur,
        et leur attribuer des droits différents selon leurs grades. Agent (consultation),
        Détective (consultation, ajout, et modification), Chef de la police (consultation,
        ajout, modification et suppression)
        <div>
          <md-field style="width: 20%; box-sizing: border-box; margin: 0 auto;">
            <label>page</label>
            <md-input v-model="pageNb"
                      type="number"></md-input>
          </md-field>

        </div>
        <div>
          <md-table v-if="selectedCrimes.length == 1">
            <md-table-row>
              <md-table-cell>_id</md-table-cell>
              <md-table-cell>{{selectedCrimes[0]._id }}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>compnos</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].compnos}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>naturecode</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].naturecode}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>incident_type_description</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].incident_type_description}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>main_crimecode</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].main_crimecode}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>reptdistrict</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].reptdistrict}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>reportingarea</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].reportingarea}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>fromdate</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].fromdate}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>weapontype</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].weapontype}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>shooting</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].shooting}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>domestic</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].domestic}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>shift</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].shift}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>year</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].year}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>month</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].month}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>day_week</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].day_week}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>ucrpart</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].ucrpart}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>x</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].x}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>y</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].y}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>streetname</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].streetname}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>xstreetname</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].xstreetname}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>location</md-table-cell>
              <md-table-cell>{{selectedCrimes[0].location}}</md-table-cell>
            </md-table-row>
          </md-table>
          <md-table v-if="selectedCrimes.length > 1">
            <md-table-row @click="getCrimeById(crime)"
                          v-if="selectedCrimes.length > 0"
                          v-for="(crime, index) in selectedCrimes"
                          :key="index">
              <md-table-cell>{{crime.compnos}} </md-table-cell>
              <md-table-cell>{{crime.incident_type_description}} </md-table-cell>
              <md-table-cell>{{crime.streetname}} </md-table-cell>
              <md-table-cell> {{crime.weapontype}} </md-table-cell>
              <md-table-cell>{{crime.fromdate}} </md-table-cell>
            </md-table-row>
          </md-table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import Vue from "vue";
import bakaPolizeiHeader from "~/components/bakaPolizeiHeader.vue";
import navbar from "~/components/navigationBar.vue";
import searchbar from "~/components/searchBar.vue";
const axios = require("axios");

export default {
  name: "saisie",
  data() {
    return {
      pageNb: 0,
      selectedCrimes: [],
      oneCrimes: []
    };
  },
  components: { bakaPolizeiHeader, navbar, searchbar },
  props: [],
  methods: {
    getCrimeById(crime) {
      var _this = this;
      axios
        .get("http://localhost:7777/api/crime/" + crime.compnos)
        .then(function(response) {
          var tmp = response.data;
          console.log(tmp);
          _this.selectedCrimes = [tmp];
          console.log(_this.selectedCrimes);
        });
    },
    nextPage() {
      this.pageNb++;
      //this.getCrimes(this.pageNb);
    },
    prevPage() {
      this.pageNb--;
      this.getCrimes(this.pageNb);
    }
  },
  watch: {
    pageNb: function() {
      var _this = this;
      axios
        .get("http://localhost:7777/api/crimes/" + this.pageNb)
        .then(function(response) {
          var tmp = response.data;
          console.log(tmp);
          _this.selectedCrimes = tmp;
          console.log(_this.selectedCrimes);
        });
    }
  },
  mounted() {
    this.selectedCrimes = [];
    this.pageNb = 1;
    // this.getCrimes(this.pageNb);
  }
};
</script>
<style>
.bloc {
  width: 80%;
  float: left;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -o-hyphens: auto;
  hyphens: auto;
  text-align: center;
}
</style>
