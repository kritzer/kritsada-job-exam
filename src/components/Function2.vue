<template>
  <v-app>
    <v-card class="mx-auto" width="100%">
      <v-card-title primary-title>
        Date format
      </v-card-title>
      <v-container>
        <v-row>
          <span>{{ someDate | moment("DD/MM/YYYY kk:mm") }}</span>
        </v-row>
        <v-row>
          <span>{{ someDate | moment("Do/MMMM/YYYY") }}</span>
        </v-row>
        <!-- 31 // จำนวนวันในเดือนนี้ -->
        <v-row>
          <span>{{ dayIn }}</span>
        </v-row>
        <!--3 ไตรมาส -->
        <v-row>
          <span>{{ quarter }}</span>
        </v-row>
        <!-- 1597046092 // Unix timestamp -->
        <v-row>
          <span>{{ unixTimeStamp }}</span>
        </v-row>
      </v-container>

    </v-card>


  </v-app>
</template>

<script>
export default {
data:()=> ({
  someDate :'2020-08-10T14:54:52+07:00',
  dayIn: null,
  quarter:null,
  unixTimeStamp:null
}),
methods:{
  getDayInMouth: function(){
    this.dayIn =  this.$moment(this.someDate).daysInMonth();
  },
  getQuarter:function(){
    this.quarter = this.$moment(this.someDate).quarter();
  },
  getUnixTimeStamp:function(){
    this.unixTimeStamp = this.$moment(this.someDate).unix();
  }
},
created(){
  this.getDayInMouth();
  this.getQuarter();
  this.getUnixTimeStamp();
}
}
</script>

<style>

</style>