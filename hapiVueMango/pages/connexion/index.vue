<template >
  <!-- <div class="container"> -->

  <div>
    <baka-polizei-header></baka-polizei-header>

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
          <md-button :href="createAccount"
                     class="md-primary">Create a new account</md-button>
          <md-button :href="connect"
                     class="md-primary"> Connexion</md-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import bakaPolizeiHeader from "~/components/bakaPolizeiHeader.vue";
// import fond from "~/assets/image/connexionBackground.png";
export default {
  name: "saisie",
  data() {
    return {
      username: undefined,
      password: undefined,
      connect: "/bakapolizei",
      createAccount: "/createAccount"
    };
  },
  components: { AppLogo, bakaPolizeiHeader },
  props: [],
  methods: {},
  mounted() {}
};
</script>

<style>
.myInput {
  width: 30%;
  height: 30%;
  color: #010508;
  background: #caced1;
  border-radius: 20px;
  margin-left: auto;
  /* text-align: center; */
  margin-right: auto;
  margin-top: 8%;
  justify-content: center;
}
.Header {
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 995;
  padding: 0 15px;
  display: flex;
  position: fixed;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #dbdfe1;
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
