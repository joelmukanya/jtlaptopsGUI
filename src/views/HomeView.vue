<template>
  <div class="container-fluid">
    <iframe :src="getRoadMap" class="container vh-100"
     frameborder="0" ></iframe>
  </div>
</template>
<script>

// @ is an alias to /src

export default {
  computed: {
    getRoadMap() {
        return this.$store.state.readMeData
    }
  },
  components: {  },
  mounted() {
    this.$store.dispatch('fetchReadMeUrl');
  }
}
</script>
