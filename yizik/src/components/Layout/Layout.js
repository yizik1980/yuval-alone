export default {
    name: 'layout',
    components: {},
    props: [],
    data() {

        return {
            list: []
        }
    },
    computed: {

    },
    async mounted() {
        let res = await fetch('https://api.openbrewerydb.org/breweries');
        let list = await res.json();
        console.log(list);
        this.list = list;
    },
    methods: {

    }
}