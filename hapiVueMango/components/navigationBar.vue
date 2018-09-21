<template>
  <div class="navbarBackGround">
    <div class="navbar">
      <md-button href="/admin"
                 class="md-primary">Admin</md-button>
      <md-button href="/bakaPolizei/saisie"
                 class="md-primary">New Crime</md-button>
      <md-button href="/admin"
                 class="md-primary">Your account</md-button>
    </div>
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
.navbarBackGround {
  background-color: bisque;
}
.logo {
  width: 80%;
}
.myHeaderImage {
  width: 80%;
}
</style>
