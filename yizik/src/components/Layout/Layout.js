import Breweries from '../brewery/Breweries.vue'
import Header from '../brewery/header.vue'
const breweriesList = [{
    "id": "10-56-brewing-company-knox",
    "name": "10-56 Brewing Company",
    "brewery_type": "micro",
    "street": "400 Brown Cir",
    "address_2": null,
    "address_3": null,
    "city": "Knox",
    "state": "Indiana",
    "county_province": null,
    "postal_code": "46534",
    "country": "United States",
    "longitude": "-86.627954",
    "latitude": "41.289715",
    "phone": "6308165790",
    "website_url": null,
    "updated_at": "2021-10-23T02:24:55.243Z",
    "created_at": "2021-10-23T02:24:55.243Z"
}];
breweriesList.map(item => {
    return {
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
})


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
        }
    },
    computed: {},
    async mounted() {
        try {
            let res = await fetch('https://api.openbrewerydb.org/breweries');
            let list = await res.json();
            this.list = list;
        } catch {
            new Error('breweries api fail')
        }

    },
    methods: {

    }
}