<template>
    <div class="input"><label for="{{name}}"></label><input type="text" id="{{name}}" @keydown="keyDown" @keypress="keyPress"></div>
</template>
<script>
export default {
    name:'InputField',
    props:['name'],
    computed:{
        value:String,
        name:String
    },methods: {
        keyPress:(e)=>{
            
            console.dir(e.target,this.props);
        }
    },
}
</script>
<style >
.input{
    display: block;
}
</style>