<template>
    <div>
        <h1 v-bind:style="{color:'blue'}">Class and Style Bindings</h1>
        <h1 v-bind:class="{display:show , displayColor:show}"> class Bindings with object</h1>
        <h1 v-bind:class="[aclass]"> class Bindings with array</h1>
        <h1 v-bind:class="[show?'yesShow' : 'noShow']">class with condition</h1>
    </div>
</template>
<script>
export default{
    name:"Classstyle",
    data(){
        return{
            show:true,
            aclass:'arrayClass',
            color:'red'
        }
    }
}
</script>
<style scoped>
.display{
    background-color: brown;
}
.arrayClass{
    background-color: brown;
}
</style>