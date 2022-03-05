<template>
    <header>
        <nav class="flex p-2">
            <aside class="m-1">
                <button class="btn btn-primary"  type="button" @click="createArray">create array</button>
            </aside>
             <aside class="m-1" >
                <button class="btn btn-primary" type="button" @click="insertItem">insert item</button>
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
               this.$emit('insert','something')
        },
        insertItem(){
         
        }
    },
}
</script>
