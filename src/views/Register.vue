<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <v-card class="elevation-12">
          <v-toolbar dark color="green accent-4 white--text">
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                  prepend-icon="person"
                  name="name"
                  label="Accountname"
                  type="name"
                  v-model="form.name"
                  :rules="nameRules"
                  required
                  data-cy="signinNameField"
              >
              </v-text-field>
              <v-text-field
                  prepend-icon="mail"
                  name="email"
                  label="Email"
                  type="email"
                  v-model="form.email"
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
                  v-model="form.password"
                  :rules="passwordRules"
                  required
              >
              </v-text-field>
              <v-text-field
                  prepend-icon="lock"
                  name="confirmPassword"
                  label="Bestätige Passwort"
                  type="password"
                  data-cy="signinPasswordField"
                  v-model="form.confirmPassword"
                  :rules="confirmRules"
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
                @click="pressed"
                data-cy="signinSubmitBtn"
            >Registrieren</v-btn>
          </v-card-actions>
          <v-footer dark color="green accent-4 white--text" bottom>
            <v-toolbar-title>Bereits einen Account?</v-toolbar-title>
            <v-spacer/>
            <v-btn text
                   color="white--text"
                   to="/Login"
            >Einloggen</v-btn>
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
name: "Register",
  data() {
    return {
      valid: false,
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      nameRules: [
        v => !!v || 'Accountname ist Pflichtfeld',
      ],
      emailRules: [
        v => !!v || 'E-Mail ist Pflichtfeld',
        v => /.+@.+/.test(v) || 'E-Mail muss gültig sein'
      ],
      passwordRules: [
        v => !!v || 'Passwort ist Pflichtfeld',
        v =>
            v.length >= 6 ||
            'Passwort muss min. 6 Zeichen lang sein'
      ],
      confirmRules: [
        v => !!v || 'Passwort bestätigen ist Pflichtfeld',
        v =>
            v.length >= 6 ||
            'Passwort muss min. 6 Zeichen lang sein',
        v =>
            v === this.form.password || 'Die Passwörter stimmen nicht überein',
      ]
    };
  },
  methods: {
    pressed() {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(data => {
            data.user
                .updateProfile({
                  displayName: this.form.name
                })
                .then(() => {});
            console.log("Name: "+ data.user.displayName);
          })
          .then(() => {
            this.$router.replace({ name: "Home" });
            console.log("Redirecting to Home");
          })
          .catch(error => (this.error = error));
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}



</style>