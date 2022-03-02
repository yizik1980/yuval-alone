<template>
<section class="layout">
    <div v-for="(item, index) in list" :key="index">
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
    }
}
</script>