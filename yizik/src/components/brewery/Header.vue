<template>
    <header>
        <nav>
            <aside>
                <button type="button" @click="createArray">create array</button>
            </aside>
        </nav>
    </header>
</template>
<script>
export default {
    name:'Header',
    components:{

    },
    methods: {
        createArray(event){
            console.log(event,this);
        }
    },
}
</script>
