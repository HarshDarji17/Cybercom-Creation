<template>
    <div>
        <h1>Prop component</h1>

        <h3 v-for="user in users" :key="user.id">
            {{user.id}} -- {{user.name}}

        </h3>
          <!-- non props -->
       
        <h3 v-bind="$attrs">peter</h3>
        <h3>malain</h3>
        <h3>kitry</h3>
        <h3>{{data}}</h3>  
    </div>
</template>
<script>

export default {
     name:'Props',
     inheritAttrs:false,
     props:['users' , 'data' , 'id:string']
}
</script>
