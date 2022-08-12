<template>
  <div class="container">
    <div class="row d-flex ourProducts">
        <h2 class="display-2">Our Products</h2>
        <div class="card" v-for="(prod, index) in products"
            :key="index">
            <h5 class="display-5">
                <span>Category: </span>
                {{prod.category}}
            </h5>
            <img :src="prod.imgURL" class="card-img-top img-fluid mx-auto" 
                :alt="prod.title">
            <div class="card-body">
                <h6 class="card-title">{{prod.title}}</h6>
                <p class="lead">
                    <span>Spec</span>
                    {{prod.prodDescription}}
                </p>
                <ul class="navbar-nav">
                    <li>
                        Price: R<span>{{prod.price}}</span>
                    </li>
                </ul>
            </div>
        </div>            
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  components: {},
  mounted() {
    this.$store.dispatch('fetchProducts');
  }

}
</script>

<style>

</style>