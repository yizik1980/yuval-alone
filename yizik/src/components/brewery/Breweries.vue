<template>
<section class="flex justify-content-center align-items-center flex-wrap">
    <div class="item" v-for="(item, index) in list" :key="index">
        <Brewery :data="item"></Brewery>
    </div>
</section>
</template>
<script>
import Brewery from './Brewery.vue'
export default {
    props:{
        list:[]
    },
    components:{
       Brewery 
    },
    props:{
        list:[]
    },
    methods: {
        insert(){
            console.log(this);
        }
    },
    created() {
      
    },
    mounted() {
         
    },
}
</script>
<style>
.item{
    min-width: 5vw;
    min-height: 100px;
    padding: 2%;
    margin: 2%;
}


</style>