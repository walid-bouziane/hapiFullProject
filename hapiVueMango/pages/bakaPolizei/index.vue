
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
          <md-table>
            <md-table-row v-if="selectedCrimes.length > 0"
                          v-for="(crime, index) in selectedCrimes"
                          :key="index">{{crime.incident_type_description}} </md-table-row>
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
      selectedCrimes: [],
      pageNb: 1
    };
  },
  components: { bakaPolizeiHeader, navbar, searchbar },
  props: [],
  methods: {
    getCrimes(page) {
      axios
        .get("http://localhost:7777/api/crimes/" + page)
        .then(function(response) {
          // handle success
          //console.log(response);
          var tmp = response.data;
          console.log(tmp);
          console.log(this.selectedCrimes);
          this.selectedCrimes = tmp;
        });
    }
  },
  mounted() {
    this.getCrimes(1);
  }
};
</script>
<style>
.bloc {
  width: 65%;
  float: left;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -o-hyphens: auto;
  hyphens: auto;
}
</style>
