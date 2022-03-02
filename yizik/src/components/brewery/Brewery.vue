<template>
    <section class="brewery-item">
    <div>
        <p>{{data.name}}</p>
    </div>
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

</style>