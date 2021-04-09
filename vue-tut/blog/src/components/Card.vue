<template>
  <!-- <div class="card"> -->
  <!-- <slot></slot> -->

  <div class="card">
      <div id="card-header">
          <slot name="header"></slot>
      </div>
       <div>
            <h3 v-for="name in names" :key="name.firstName">
                <slot :firstName='name.firstName' :lastName='name.lastName'></slot>
            </h3>
        </div>
      <div id="card-footer">
        <slot name="footer"></slot>
        </div>
  </div>
</template>

<script>
export default {
      name:'Card',
      data() {
        return {
            names: [
                { firstName: 'Manan', lastName: 'Vohra' },
                { firstName: 'Shivam', lastName: 'Dube' }
            ]
        }
    }
}
</script>

<style>
.card {
    box-shadow: 0 4pc 8x 0 rgba(0,0,0,.2);
    transition: .3s;
    padding: 16px;
    margin-bottom: 20px;
    width:200px;
}
.card:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,.2);
}
</style>