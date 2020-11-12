<template>
<v-app>
    <v-card class="mx-auto" width="100%">
        <v-card-title primary-title>
            Date format
        </v-card-title>
        <v-subheader>แปลงวันที่ที่ให้จากข้อมูลที่ให้เป็นรูปแบบต่างๆ {{someDate}}</v-subheader>
        <v-container>
            <v-row>
                <span>วันที่แบบสากล {{ someDate | moment("DD/MM/YYYY kk:mm") }}</span>
            </v-row>
            <v-row>
                <span>วันที่แบบไทย {{ someDate | moment("Do/MMMM/YYYY") }}</span>
            </v-row>
            <!-- 31 // จำนวนวันในเดือนนี้ -->
            <v-row>
                <span>จำนวนวันในเดือนนี้ {{ dayIn }}</span>
            </v-row>
            <!--3 ไตรมาส -->
            <v-row>
                <span>ไตรมาสที่ {{ quarter }}</span>
            </v-row>
            <!-- 1597046092 // Unix timestamp -->
            <v-row>
                <span>unixTimeStamp {{ unixTimeStamp }}</span>
            </v-row>
        </v-container>

    </v-card>

</v-app>
</template>

<script>
export default {
    data: () => ({
        someDate: '2020-08-10T14:54:52+07:00',
        dayIn: null,
        quarter: null,
        unixTimeStamp: null
    }),
    methods: {
        getDayInMouth: function () {
            this.dayIn = this.$moment(this.someDate).daysInMonth();
        },
        getQuarter: function () {
            this.quarter = this.$moment(this.someDate).quarter();
        },
        getUnixTimeStamp: function () {
            this.unixTimeStamp = this.$moment(this.someDate).unix();
        }
    },
    created() {
        this.getDayInMouth();
        this.getQuarter();
        this.getUnixTimeStamp();
    }
}
</script>

<style>

</style>
