<template>
<v-app>
    <v-card class="mx-auto" width="100%">
        <v-card-title class="d-flex align-center justify-center mx-auto">
            Test fetch API
        </v-card-title>
        <v-row>
            <v-col v-for="(item, id) in pokemons" :key="id" class="d-flex child-flex" cols="2" max-width="100%">
                <v-img lazy-src="https://picsum.photos/id/11/10/6" :src="item.url" class="grey lighten-2" v-if="item.id !== ''" max-height="70%" max-width="30%">
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
    data: () => ({
        pokemons: [],
    }),
    methods: {
        getPoke: function () {

            for (let i = 1; i < 105; i++) {
                Controller.getPokemon(i).then(response => {
                    this.pokemons.push({
                        no: response.data.id,
                        name: response.data.name,
                        url: response.data.sprites.front_default
                    })
                })
            }

        },
    },
    mounted() {

    },
    created() {
        this.getPoke();
    }
}
</script>

<style>

</style>
