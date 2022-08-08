<template>
  <div class="container-fluid">
    <iframe :src="getRoadMap" class="container vh-100"
     frameborder="0"></iframe>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  computed: {
    getRoadMap() {
      if(this.$store.state.readMeData){
        return this.$store.state.readMeData
      }else {
        return "Loading..";
      }
      
    }
  }
}
</script>
