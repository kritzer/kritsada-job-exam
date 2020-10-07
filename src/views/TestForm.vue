<template>
  <v-app>          
    <v-card  class="mx-auto" width="75%">
        <v-tabs
            v-model="tab"
            slider-color="primary"
        >
            <v-tab
                v-for="item in items" :key="item.tab">
                {{item.tab}}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item.tab">
            <v-card flat>
                <v-card-text>
                <component v-bind:is="item.content"></component>
                </v-card-text>
            </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
  </v-app>
</template>

<script>
const Home = () => import('../components/Home.vue')
const Pokemon = () => import('../components/Pokemon.vue')
const Function1 = () => import('../components/Function1.vue')
const Function2 = () => import('../components/Function2.vue')
const Function3 = () => import('../components/Function3.vue')

export default {
 components: {
    Home,
    Pokemon,
    Function1,
    Function2,
    Function3
  },
data:() =>({

    tab: null,
    items: [
            // 'Home', 'Pokemon', 'Function1', 'Function2', 'Function3',
            { tab: 'Home', content: 'Home' },
            { tab: 'Pokemon', content: 'Pokemon' },
            { tab: 'Function1', content: 'Function1' },
            { tab: 'Function2', content: 'Function2' },
            { tab: 'Function3', content: 'Function3' },

            ],
    
}),
methods:{
    
}
}
</script>