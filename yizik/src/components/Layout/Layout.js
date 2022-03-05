import Breweries from '../brewery/Breweries.vue'
import Header from '../brewery/header.vue'



export default {
    name: 'layout',
    components: {
        Breweries,
        Header
    },
    props: [],
    data() {
        return {
            list: [],
            mainObList: []
        }
    },
    computed: {},
    async mounted() {


    },
    methods: {
        async createArray() {
            try {
                let res = await fetch('https://api.openbrewerydb.org/breweries');
                let list = await res.json();
                this.list = list.map(item => {
                    return {
                        ...item,
                        state: {
                            [item.state]: {
                                stateName: item.state,
                                breweries: {
                                    [item.name]: {
                                        city: item.city,
                                        street: item.street
                                    }
                                }
                            }
                        }
                    }
                }).sort((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0));
                console.log(this.list);
            } catch {
                new Error('breweries api fail')
            }

        },
        doInsertion(event) {

        }
    }
}