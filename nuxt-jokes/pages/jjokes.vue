<template>
       
    <div class="container" v-if =" jokes.length > 0">
        <h3>Best Jokes to make your day 🙂</h3>
            <div class="joke">{{ jokes[b]['joke'] }}</div> <br>
            <button  class="btn" type="btn" @click="b < jokes.length -1 ? b++ : b=0">Next Joke</button>
    </div>
</template>


<script>
import axios from 'axios'

export default {
   
    data() {
        return {
            jokes: [],
            b:0
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
                'https://icanhazdadjoke.com/search', config)
            this.jokes = res.data.results
            console.log(this.jokes)
        } catch (error) {
            console.log(error)
        }
    },
    head() {
        return {
            title: 'Jokes',
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
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: #2980b9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}
.container{
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px 10px rgba(0,0,0,0.1);
    text-align: center;
    max-width: 100%;
    width: 800px;
}
h3{
    color: #f8b627;
}
.joke{
    font-size: 30px;
    letter-spacing: 1px;
    line-height: 40px;
    margin: 50px auto;
    max-width: 600px;
}
.btn{
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