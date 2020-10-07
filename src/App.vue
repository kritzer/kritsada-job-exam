<template>
  <v-app>
    <v-app-bar
      app
      color="blue-grey darken-3"
      dark>  
    <v-card-title class="d-flex align-center justify-center mx-auto" >
              Test Frontend
    </v-card-title>
    </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
