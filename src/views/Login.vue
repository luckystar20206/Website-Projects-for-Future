<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                  prepend-icon="person"
                  name="email"
                  label="Email"
                  type="email"
                  v-model="email"
                  :rules="emailRules"
                  required
                  data-cy="signinEmailField"
              >
              </v-text-field>
              <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                  data-cy="signinPasswordField"
                  v-model="password"
                  :rules="passwordRules"
                  required
              >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
                color="primary"
                :disabled="!valid"
                @click="submit"
                data-cy="signinSubmitBtn"
            >Login</v-btn
            >
          </v-card-actions>
          <v-toolbar dark color="primary" bottom>
            <v-toolbar-title>Noch kein Account?</v-toolbar-title>
            <v-btn color="primary"
                   @click="register"
            >Registrieren</v-btn>
          </v-toolbar>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: 'Login',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v =>
            v.length >= 6 ||
            'Password must be greater than 6 characters'
      ]
    };
  },
  methods: {
    submit() {
      firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(data => {
            console.log(data);
            this.$router.replace({ name: "secret" });
          })
          .catch(error => {
            this.error = error;
          });
    }
  }
};
</script>

<style lang="scss" scoped>

div {
  color: inherit;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
  max-width: 500px
}

button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}

.error {
  color: red;
}
</style>