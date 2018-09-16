
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
      </div>
    </div>
  </div>
</template>


<script>
// import Vue from "vue";
import bakaPolizeiHeader from "~/components/bakaPolizeiHeader.vue";
import navbar from "~/components/navigationBar.vue";
import searchbar from "~/components/searchBar.vue";

export default {
  name: "saisie",
  data() {
    return {
      tab: []
    };
  },
  components: { bakaPolizeiHeader, navbar, searchbar },
  props: [],
  methods: {},
  mounted() {}
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
