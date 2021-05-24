<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="text" placeholder="Search Jokes...">
        <input type="submit" value="Search Jokes">
    </form>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            text: ''
        }
    },
    methods: {
        onSubmit() {
            this.$emit('search-text', this.text);
            this.text = '';
        }
    }
}
</script>

<style>
form {
    display: flex;
    padding-bottom: 2rem;
}
input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 2px solid #d3d016;
    outline: 0;
}
input[type="submit"] {
    flex: 2;
    background: #d3d016;
    color: #fff;
    border: 1px solid #d3d016;
    cursor: pointer;
}
</style>