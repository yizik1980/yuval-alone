<template>
    <div class="input"><label :for="inputName">{{inputName}}</label><input :placeholder="value" type="text" :id="inputName" @keydown="keyDown" @keypress="keyPress"></div>
</template>
<script>
export default {
    name:'InputField',
    props:{
        value:String,
        inputName:String
    }
    ,methods: {
        keyPress:(e)=>{
            
            console.dir(e.target,this.props);
        }
    },
}
</script>
<style>

.input{
    display: block;
}
    label{
        display: inline-block;
        vertical-align: middle;
        width: 40%;
        white-space: nowrap;
        text-align: left;
    }
    input{
        width: 50%;
        vertical-align: middle;
        margin-right: 2%;
    }
</style>