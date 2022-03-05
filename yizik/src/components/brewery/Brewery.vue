<template>
    <section class="brewery-item">
    <p>{{data.city}}</p>

</section>
</template>
<script >


export default {
    name: 'Brewery',

    props: {
        data: Object,
        name:String
    },
    data() {
        return {}
    },
    computed: {

    },
    mounted() {

    },
    methods: {

    }
}
</script>
<style scoped>
section{
    cursor: pointer;
}
p{
    background: cornflowerblue;
    padding: 5px 5px 2px 5px;
    color:#fff;
}
</style>