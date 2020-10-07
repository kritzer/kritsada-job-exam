<template>
  <v-app>
      <v-card>
        <v-card-title>
          เขียน function ตรวจหา max อันดับที่ 2 ของ array
        </v-card-title>
        <v-container>
          <p>a:[] // null</p>
          <p>b:[1] // 1</p>
          <p>c:[1,2,3] // 2</p>
          <p>d: [1,1] // 1</p>
          <p>e:[1,2,3,4,5,6] // 5</p>
          <p>f:[1,5,3,2,5,10] // 5</p>
          <p>g:[100,5,3,2,99] // 99</p> 
          <p>h:[35,5,3,2,5,100] // 35</p>
          <p>i:[1,5,101,2,5,10] // 10</p>
          <p>j:[10,10,9] // 9</p>
        </v-container>
        <v-card-title primary-title>
          Result
        </v-card-title>
          <v-container v-for="(item,id) in result" :key="id">
            <p>{{item}}</p>
          </v-container>

      </v-card>
  </v-app>
</template>

<script>
export default {
data:()=>({
    array:[[],[1],[1,2,3],[1,1],[1,2,3,4,5,6],[1,5,3,2,5,10],[100,5,3,2,99],[35,5,3,2,5,100],[1,5,101,2,5,10],[10,10,9]],

    result:[],
    max:null,
    max2:null,
    reA: null,

}),
methods:{
  findData:function(){
    let x = this.array.length;
    for(let i=0; i< x ;i++){
      if(this.array[i].length == 0){
        this.result[i] = null;
      }
      if(this.array[i].length == 1){
        this.result[i] = this.array[i].[0]
      }
      if(this.array[i].length > 1){
        this.max = 0;
        
        this.findMax(this.array[i]);
        this.findSecondaryMax(this.array[i]);
        this.result[i] = this.max2;
      }
    }
  },
  findSecondaryMax:function(data){
    this.max2 = 1;
    for(let i = 0; i < data.length ;i++){
      if(data[i] > this.max2 && data[i] < this.max){
        this.max2 = data[i]
      }
    }
  },
  findMax:function(data){
    for(let i = 0; i < data.length; i++){
      if(data[i] > this.max){
        this.max = data[i]
      }
    }
  }
},
created(){
  this.findData();
}
}
</script>

<style>

</style>