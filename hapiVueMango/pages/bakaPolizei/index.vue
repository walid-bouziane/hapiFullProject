
<template>
  <div>
    <baka-polizei-header></baka-polizei-header>
    <navbar></navbar>
    <span>
      ici est la page après la connexion, Forcer l’identification de chaque utilisateur,
      et leur attribuer des droits différents selon leurs grades. Agent (consultation),
      Détective (consultation, ajout, et modification), Chef de la police (consultation,
      ajout, modification et suppression)
    </span>
  </div>
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
