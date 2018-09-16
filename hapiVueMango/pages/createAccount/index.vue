
<template>
  <div>
    <baka-polizei-header></baka-polizei-header>
    <md-card class="myCenter">
      <md-card-content>
        <md-field>
          <label>Agent first name</label>
          <md-input required
                    v-model="firstName"></md-input>
        </md-field>
        <md-field>
          <label>Agent last name</label>
          <md-input required
                    v-model="lastName"></md-input>
        </md-field>
        <md-field>
          <label>E-mail</label>
          <md-input required
                    v-model="email"></md-input>
        </md-field>

        <div class="md-layout-item">
          <md-field>
            <label for="movie">Agent Category</label>
            <md-select required
                       v-model="categoryAgent">
              <md-option value="agent">Agent</md-option>
              <md-option value="detective">Détective</md-option>
              <md-option value="chefPolizei">Chef de la police</md-option>
            </md-select>
          </md-field>
        </div>

        <md-card-actions>
          <md-button href="/connexion">Connexion</md-button>
          <md-button @click="createAccount">Create</md-button>
        </md-card-actions>
      </md-card-content>
    </md-card>
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
      tab: [],
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      categoryAgent: undefined
    };
  },
  components: { bakaPolizeiHeader, navbar },
  props: [],
  methods: {
    createAccount: () => {
      console.log("createAccount");
      console.log(
        this.firstName,
        this.lastName,
        this.email,
        this.categoryAgent
      );
    }
  },
  mounted() {}
};
</script>

<style>
.myCenter {
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
</style>
