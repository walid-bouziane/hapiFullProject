<template>
  <div class="myHeaderContener">
    <img style="margin-left:10%; height: 100%"
         class="logo"
         src="~/assets/image/HeaderHapiPolizei.jpg">
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
.myHeaderContener {
  width: 100%;
  height: 220px;
}
.logo {
  width: 80%;
}
.myHeaderImage {
  width: 80%;
}
</style>
