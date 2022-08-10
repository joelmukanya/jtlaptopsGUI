<template>
  <div class="container">
    <div class="row d-flex ourProducts">
        <div class="card" v-for="(prod, index) in products"
            :key="index">
            
            <h3 class="display-3">
                <span>Category</span>
                {{prod.category}}
            </h3>
            <img :src="prod.imgURL" class="card-img-top img-fluid" 
                :alt="prod.title">
            <div class="card-body">
                <h5 class="card-title">{{prod.title}}</h5>
                <p class="lead">
                    <span>Spec</span>
                    {{prod.descripton}}
                </p>
                <ul class="navbar-nav">
                    <li>
                        Price: R<span>{{}}</span>
                    </li>
                </ul>
            </div>
        </div>            
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>