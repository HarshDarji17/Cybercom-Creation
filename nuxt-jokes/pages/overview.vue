<template>

  <div class="products">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                    <h3>Overview Page</h3>
                    
                 <p>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.
                 </p>
              </div>
              <div class="col-md-6">
                  <img :src="require('@/assets/img/overview.svg')" alt="" class="img-fluid">
              </div>
            </div>
          </div>
      </div>
  </div>
  
      
       
</template>

<script>
export default {
  head() {
        return {
            title: this.joke,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Overview',
                },
            ],
        }
    },

}
</script>

<style>

</style>