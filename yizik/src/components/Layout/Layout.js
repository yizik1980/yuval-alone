import Breweries from '../brewery/Breweries.vue';
import Header from '../brewery/header.vue';
import Popup from '../Popup.vue';

export default {
    name: 'layout',
    components: {
        Breweries,
        Header,
        Popup
    },
    props: [],
    data() {
        return {
            list: [],
            mainObList: [],
            show:false
        }
    },
    mounted() {
        this.showPopup = false;
    },
    computed: {},
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
        showPopup(event) { 
            this.show = !this.show;
            console.log(this.show);
        }
    }
}