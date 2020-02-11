<template>
  <v-container>
    <v-layout row class="text-xs-center">
      <v-flex xs4 class="grey lighten-4">
        <v-container
          style="position: relative;top: 13%;"
          class="text-xs-center"
        >
          <v-card flat>
            <v-form>
              <v-text-field
                v-model="login"
                name="Login"
                label="Login"
              ></v-text-field>
              <v-text-field
                v-model="password"
                name="Password"
                label="Password"
                type="password"
              ></v-text-field>
              <v-card-actions>
                <v-btn primary large block @click="makeLogin">Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import httpClient from "../../services/httpClient";
import { feRedirect } from "../../mixins/feRedirect";

const END_POINT = "/login";

export default {
  name: "FeLogin",
  mixins: [feRedirect],
  data() {
    return {
      login: undefined,
      password: undefined
    };
  },
  methods: {
    makeLogin() {
      httpClient
        .post(END_POINT, {
          login: this.login,
          password: this.password
        })
        .then(response => {
          if (response.status === 200) {
            this.commitUser(response.data);
            this.routerRedirect({
              name: "Home"
            })
          }
        });
    },
    commitUser(user) {
      this.$store.commit("loadUser", user);
    }
  }
};
</script>
