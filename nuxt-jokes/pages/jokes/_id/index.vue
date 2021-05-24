<template>
    <div>
        <img :src='`https://icanhazdadjoke.com/j/${$route.params.id}.png`' :alt='`${joke}`' />

        <hr>
        <n-link to="/jokes">
            <button>Back to Jokes</button>
        </n-link>
        <small>Joke ID: {{ $route.params.id }}</small>
    </div>
</template>

<script>
import axios from 'axios'   
export default {
    data() {
        return {
            joke: {},
        }
    },
    async created() {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        }
        try {
            const res = await axios.get(
                `https://icanhazdadjoke.com/j/${this.$route.params.id}`,
                config
            )
            this.joke = res.data.joke
        } catch (error) {
            console.log(error)
        }
    },
    head() {
        return {
            title: this.joke,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'jokes',
                },
            ],
        }
    },
}
</script>

<style>
h2, 
button, 
small,
img {
    margin: 1rem 2rem;
    font-family: Georgia, serif;
}
button {
    background-color: #f8b627;
    color: #fff;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
    padding: 12px 30px;
    font-size: 18px;
    cursor: pointer; 
    outline: none;
    font-family: sans-serif;
    font-weight: 500;
    margin-bottom: 10px;
}
</style>