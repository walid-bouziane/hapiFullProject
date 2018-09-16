<template>
  <div class="navbar">
    <md-button href="/admin"
               class="md-primary">Primary</md-button>
    <md-button href="/admin"
               class="md-primary">Primary</md-button>
    <md-button href="/admin"
               class="md-primary">Primary</md-button>
    <md-button href="/admin"
               class="md-primary">Primary</md-button>
    <md-button href="/admin"
               class="md-primary">Primary</md-button>
  </div>
</template>


<script>
// import Vue from "vue";

export default {
  name: "saisie",
  data() {
    return {
      tab: []
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
.navbar {
  width: 50%;
  margin-left: 25%;
  text-align: center;
}
.logo {
  width: 80%;
}
.myHeaderImage {
  width: 80%;
}
</style>
