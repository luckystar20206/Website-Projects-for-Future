<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <v-card class="elevation-12">
          <v-toolbar dark color="green accent-4 white--text">
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
                  label="Passwort"
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
                block
                color="primary lighten-2"
                :disabled="!valid"
                @click="submit"
                data-cy="signinSubmitBtn"
            >Login</v-btn>
          </v-card-actions>
          <v-footer dark color="green accent-4 white--text" bottom>
            <v-toolbar-title>Noch kein Account?</v-toolbar-title>
            <v-spacer/>
            <v-btn text
                   color="white--text"
                   to="/Register"
            >Registrieren</v-btn>
          </v-footer>
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
        v => !!v || 'E-Mail ist Pflichtfeld',
        v => /.+@.+/.test(v) || 'E-Mail muss gültig sein'
      ],
      passwordRules: [
        v => !!v || 'Passwort ist Pflichtfeld',
        v =>
            v.length >= 6 ||
            'Passwort muss min. 6 Zeichen lang sein'
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
            this.$router.replace({ name: "Home" });
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


.error {
  color: red;
}
</style>