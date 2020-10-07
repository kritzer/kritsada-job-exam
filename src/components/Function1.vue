<template>
  <v-app>
      <v-card>
        <v-card-title primary-title dark>
          Data from exam-data.JSON
        </v-card-title>
        <v-container v-for="(item, id) in lastAnwser" :key="id">
          <v-row>
            <v-col cols="6">
              <p>Name: {{item.name}}</p>
            </v-col>
            <v-col cols="4">
              <p> Total sub product weight: {{item.total_wieght}}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
  </v-app>
</template>

<script>
import exam_data from '../services/data/exam-data.json'
export default {
data:() =>({
  data:exam_data,
  temp: null,
  anwser:[],
  lastAnwser:[],
  total_wieght: 0,
}),
methods:{
  getData: function(){
    for(let i = 0;i < this.data.length ;i++){
      if(this.data[i].is_editable_price == false){
        for(let j = 0;j < this.data[i].products.length;j++){
          this.anwser.push({
              id: this.data[i].id,
              name: this.data[i].name,
              weight: this.data[i].products[j].weight,
              is_editable_price: this.data[i].is_editable_price
          })
        }
      }
    } 
    this.getTotalWeight();  
  },
  getTotalWeight: function(){
    for (let i = 0; i < this.anwser.length; i++) {
      this.total_wieght = 0
      for (let j = i+1; j < this.anwser.length; j++) {
        this.total_wieght = this.anwser[i].weight
        if(this.anwser[i].name == this.anwser[j].name){
          this.total_wieght += this.anwser[j].weight
        }
      }
      if(this.total_wieght !== 0){
        this.lastAnwser.push({
          id: this.data[i].id,
          name: this.anwser[i].name,
          total_wieght: this.total_wieght
        })
      }
    }
  }
},
created(){

  this.getData();

}

}
</script>
