<template>

  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            email
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in post"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
    name:showdata,
     data(){
         return{
      post = JSON.parse(localStorage.getItem('data'))
     
         }
     }
}
</script>

<style>
     
</style>