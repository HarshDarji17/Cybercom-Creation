<template>
    <div>
        <button v-on:click="updateUsers">Update Users</button>
    </div>
</template>
<script>
export default {
    name:'Child',
    methods:{
        updateUsers(){               
            this.$emit('changeUsers',"users[{id:1 , name:'harsh' , email:'harsh11@gmail.com'},]")
        }
    }
}
</script>