<template>
  <div class="container-fluid">
    <SpinnerComponent v-show="showSpinner"/>
    <iframe :src="getRoadMap" class="container vh-100"
     frameborder="0" ></iframe>
  </div>
</template>
<script>
import SpinnerComponent from '@/components/SpinnerComponent.vue'
// @ is an alias to /src

export default {
  computed: {
    getRoadMap() {
        return this.$store.state.readMeData
      },
    showSpinner() {
      return this.$store.state.showSpinner
    }
  },
  components: {
    SpinnerComponent
  },
  mounted() {
    this.$store.dispatch('fetchReadMeUrl');
  }
}
</script>
