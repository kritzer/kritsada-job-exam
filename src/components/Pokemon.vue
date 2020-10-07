<template>
  <v-app>
      <v-card class="mx-auto" width="100%">
        <v-card-title class="d-flex align-center justify-center mx-auto">
            Test fetch API
        </v-card-title>
        <v-row>
            <v-col
            v-for="(item, id) in pokemons"
            :key="id"
            class="d-flex child-flex"
            cols="2"
            >
                <v-img
                    :src="item.url"
                    class="grey lighten-2"
                    v-if="item.id !== ''"
                >
                    <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                    </template>
                </v-img>
                <v-subheader>
                    {{item.name}}
                </v-subheader>
            </v-col>
        </v-row>
      </v-card>
  </v-app>
</template>

<script>
import Controller from '../services/Controller'
export default {
data:() =>({
pokemons:[{
    id:'',
    name:'',
    url:'',
}],
}),
methods:{
    getPoke:async function(){
        for(let i = 0;i < 105;i++){
            Controller.getPokemon(i+1).then(response=>{
                if(response.data.id == i+1){
                this.pokemons.push({
                    id: response.data.id,
                    name: response.data.name,
                    url: response.data.sprites.front_default
                })                      
                }
        })
        }

    }
},
mounted() {

},
created(){
    this.getPoke();
}
}
</script>

<style>

</style>