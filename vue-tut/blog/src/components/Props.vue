<template>
    <div>
        <h1>Prop component</h1>

        <h3 v-for="user in users" :key="user.id">
            {{user.id}} -- {{user.name}}

        </h3>
    </div>
</template>
<script>

export default {
     name:'Props',
     props:['users']
}
</script>
