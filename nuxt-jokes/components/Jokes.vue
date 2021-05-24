<template>

    <n-link :to="`jokes/${id}`">
    <div class="container">
        <div class="joke">
            <p>{{ joke }}</p>
        </div>
    </div>
    </n-link>
</template>

<script>
export default {
    name: 'Jokes',
    props: ['joke', 'id'],
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
a {
    text-decoration: none;
}
.joke{
    font-size: 30px;
    letter-spacing: 1px;
    line-height: 40px;
    margin: 50px auto;
    max-width: 600px;
    color: brown;
}
</style>