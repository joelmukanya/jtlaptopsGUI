<template>
    <div class="container">
      <fieldset>
          <legend class="display-2">Please fill in your details.</legend>
          <form class="form" @submit.prevent="signUp" method="post">
              <div class="row">
                <input class="form-control col" v-model="fullname" type="text" placeholder="Enter your fullname" required/>
              </div>
              <div class="row">
                <input class="form-control col" v-model="email" type="email" placeholder="Enter your email" required/>
              </div>
              <div class="row">
                <input class="form-control col" v-model="userpassword" type="password" placeholder="Enter your password" required/>
              </div>
              <div class="row">
                <select class="form-select col" v-model="userRole" aria-label="Select your role">
                    <option name="userRole" value="user" selected>User</option>
                </select>
              </div>
              <div class="row">
                <input class="form-control col" v-model="phonenumber" type="tel" placeholder="Enter your phone number" maxlength="10"/>
              </div> 
              <div class="row">
                <input class="form-control col" type="date" v-model="joinDate"/>
              </div>
              <div class="row">
               <label class="form-control text-danger" v-if="errMsg">{{errMsg}}</label>
              </div>
              <div class="row">
                <button type="submit"  class="btn btn-success">Register</button>
              </div>
          </form>
      </fieldset>
    </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: '', 
      email: '',
      userpassword: '',
      userRole: '',
      phonenumber: '',
      joinDate: '',
      errMsg: ''
    }
  },
  methods: {
    signUp() {
         this.$store.dispatch("signUp", 
          {
            fullname: this.fullname, 
            email: this.email,
            userpassword: this.userpassword,
            userRole: this.userRole,
            phonenumber: this.phonenumber,
            joinDate: this.joinDate,
          }
        );
    }
  },
  mounted() {
    this.$store.state.showSpinner = false;
  }
}
</script>

<style>

</style>