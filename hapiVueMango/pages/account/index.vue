<template>
  <md-content class="md-scrollbar">
    <baka-polizei-header></baka-polizei-header>
    page d'administration des utilisateurs, page disponible uniquement pour chef de police
  </md-content>
</template>


<script>
// import Vue from "vue";
import bakaPolizeiHeader from "~/components/bakaPolizeiHeader.vue";

export default {
  name: "saisie",
  data() {
    return {
      tab: []
    };
  },
  components: { bakaPolizeiHeader },
  props: [],
  methods: {},
  mounted() {}
};
</script>
