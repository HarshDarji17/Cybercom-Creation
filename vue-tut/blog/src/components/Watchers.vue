<template>
    <div>
       <div class="wrapper" id="app">
           <!-- celsius -->
      <input
            v-model="celsius"
            value="celsius" 
            placeholder="Enter Celsius" />
            <!-- fahrenheit -->
      <input
        v-model="fahrenheit"
        value="fahrenheit"
        placeholder="Enter Fahrenheit"
       />

    </div>
    </div>
</template>
<script>
export default {
        name:'Watchers',

        data() {
            return{
          celsius: 0,
          fahrenheit: 0,}
        },
        watch: {
          celsius: function () {
            this.fahrenheit = Math.round((this.celsius * 9) / 5 + 32);
          },
          fahrenheit: function () {
            this.celsius = Math.round(((this.fahrenheit - 32) * 5) / 9);
          },
        },
   
    
}
</script>
<style scoped>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family:  "sans-serif";
}
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

input {
  width: 30%;
  border-radius: 3px;
  border: none;
  background-color: #3d348b;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
  padding: 2rem 2rem;
  margin-bottom: 1rem;
}

input:focus {
  outline: none;
}

::placeholder {
 
  color: white;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {

  color: white;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: white;
}
</style>