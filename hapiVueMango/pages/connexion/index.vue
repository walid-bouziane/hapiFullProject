<template >
  <!-- <div class="container"> -->

  <section class="myInput">
    <div class="myCenter">
      <div style="margin-left: calc(50% - 40px)"> Nickname</div>
      <md-field class="row">
        <label>username</label>
        <md-input v-model="username"
                  placeholder="Delacroix">
        </md-input>
      </md-field>
      <div style="margin-left: calc(50% - 40px)">Password</div>
      <md-field class="row">
        <label>Password</label>
        <md-input v-model="password"
                  type="password">
        </md-input>
      </md-field>
      <div class="row">
        <md-button :href="pageUrl"
                   class="md-primary">Create a new account</md-button>
        <md-button :href="pageUrl"
                   class="md-primary"> Connexion</md-button>
      </div>
    </div>
  </section>
  <!-- </div> -->
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
// import fond from "~/assets/image/connexionBackground.png";
export default {
  name: "saisie",
  data() {
    return {
      username: undefined,
      password: undefined,
      pageUrl: "/admin"
    };
  },
  components: { AppLogo },
  props: [],
  methods: {},
  mounted() {}
};
</script>

<style>
.container {
  /* background-image: url("~/assets/image/connexionBackground.png"); */
}

.myInput {
  width: 400px;
  height: 300px;
  color: #010508;
  background: #caced1;
  border-radius: 20px;
  margin-left: auto;
  /* text-align: center; */
  margin-right: auto;
  margin-top: 50vh;
  justify-content: center;
}
.middlequestion {
  margin-left: calc(50% - 100px);
}
.row {
  margin-left: 30px;
  margin-right: 30px;
  width: calc(100% - 60px);
}
.myCenter {
  padding-top: 28px;
  box-sizing: border-box;
}
</style>
