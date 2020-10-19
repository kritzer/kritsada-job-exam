<template>
  <v-app>
      <v-card class="mx-auto" width="75%" color="pink lighten-5">
        <v-card-title class="d-flex align-center justify-center mx-auto">
            Test form and validation
        </v-card-title>
        <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <!-- firstName field -->
            <v-row>
                <v-col cols="2">
                    <h3>First Name</h3>
                </v-col>
                <v-col cols="10">
                    <v-text-field
                    v-model="firstName"
                    :counter="16"
                    :rules="firstNameRules"
                    label="Please fill first name"
                    required
                    ></v-text-field>   
                </v-col>
            </v-row>
            <!-- lastName field -->
            <v-row>
                <v-col cols="2">
                    <h3>Last Name</h3>
                </v-col>
                <v-col cols="10">
                    <v-text-field
                    v-model="lastName"
                    :counter="16"
                    :rules="lastNameRules"
                    label="Please fill last name"
                    required
                    ></v-text-field>
                </v-col>
            </v-row>
            <!-- Email field -->
            <v-row>
                <v-col cols="2">
                    <h3>Email</h3>
                </v-col>
                <v-col cols="10">
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Please fill email"
                    autocomplete="off"
                    required
                    ></v-text-field>
                </v-col>
            </v-row>

            <!-- Password field -->
            <v-row>
                <v-col cols="2">
                    <h3>Password</h3>
                </v-col>
                <v-col cols="10">
                    <v-text-field
                    v-model="password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passWordRules"
                    :type="show ? 'text' : 'password'"
                    :label="verifyMessage"
                    required
                    @click:append="show = !show"
                    ></v-text-field>
                </v-col>
            </v-row>
            <!-- Verify Password field -->
            <v-row>
                <v-col cols="2">
                    <h3>Verify Password</h3>
                </v-col>
                <v-col cols="10">
                    <v-text-field
                    v-model="verifyPassword"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passWordRules"
                    :type="show1 ? 'text' : 'password'"
                    :label="verifyMessage"
                    required
                    @click:append="show1 = !show1"
                    ></v-text-field>
                </v-col>
            </v-row>
            <!-- Gender Pick -->
            <v-row>
                <v-col cols="2">
                    <h3>Gender</h3>
                </v-col>
                <v-col cols="10">
                <v-select
                    v-model="gender"
                    :items="genders"
                    :rules="[v => !!v || 'Please select a gender']"
                    label=" Please select a gender"
                    required
                ></v-select>
                </v-col>
            </v-row>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>
        </v-form>
        </v-container>
        <v-container v-if="this.valid == true && this.verifed == true">
            <h4>Resualt</h4>
            <p>First Name: {{firstName}}</p>
            <p>Last Name: {{lastName}}</p>
            <p>Email: {{email}}</p>
            <p>Gender: {{gender}}</p>
        </v-container>
      </v-card>

  </v-app>
</template>

<script>
export default {
data:() =>({
      valid: true,
      verifed: false,
      count: 0,
      show: false,
      show1: false,
      verifyMessage: 'Please fill verify password',
      gender: '',
      genders:[ 'Male','Female'],
      firstName: '',
      firstNameRules: [
        v => !!v || 'Please fill out this field.',
        v => (v && v.length <= 10) || 'First Name must be less than 10 characters',
      ],
      lastName: '',
      lastNameRules: [
        v => !!v || 'Please fill out this field.',
        v => (v && v.length <= 10) || 'Last Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Please fill out this field.',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passWordRules:[
          v => !!v || 'Please fill out this field.',
          v => (v && v.length >= 8 )|| 'Password must more than 8 characters',
      ],
      verifyPassword: '',
 

}),
methods:{
      validate:function () {
        this.$refs.form.validate()
        this.verifyPass()
      },
      reset: function () {
          this.$refs.form.reset();
      },
      verifyPass:function(){
          this.verifyMessage = '';
          if(this.password !== this.verifyPassword){
              this.verifed = true
              this.verifyMessage = "Password is not Match !"
              this.verifed = false
          }
          else{
              this.verifyMessage = "Password is correct"
                this.verifed = !this.verifed;
          }
      },
},

}
</script>
