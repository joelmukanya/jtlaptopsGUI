<template>
  <div class="container">
      <fieldset>
          <legend class="display-2">Login</legend>
          <form class="form loginForm">
              <div class="row">
                <input class="form-control col" name="email" id="email"
                v-model="email" type="email" placeholder="Enter your email" required/>
              </div>
              <div class="row">
                <input class="form-control col" name="userpassword" id="userpassword"
                v-model="userpassword" type="password" placeholder="Enter your password" required/>
              </div>
              <div class="row">
               <label class="form-control text-danger" v-if="errMsg">{{errMsg}}</label>
              </div>
              <div class="row">
                <div class="btn btn-success">Login</div>
              </div>
          </form>
      </fieldset>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            userpassword: null,
            errMsg: null
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>