<template>
    <div class="container">
      <fieldset>
          <legend class="display-2">Create a user account</legend>
          <form class="form">
              <div class="row">
                <input class="form-control col" name="fullname" id="fullname"
                v-model="fullname" type="text" placeholder="Enter your fullname" required/>
              </div>
              <div class="row">
                <input class="form-control col" name="email" id="email"
                v-model="email" type="email" placeholder="Enter your email" required/>
              </div>
              <div class="row">
                <input class="form-control col" name="userpassword" id="userpassword"
                v-model="userpassword" type="password" placeholder="Enter your password" required/>
              </div>
              <div class="row">
                <select class="form-select col" id="userRole"
                v-model="userRole" aria-label="Select your role">
                    <option name="userRole" value="user" selected>User</option>
                </select>
              </div>
              <div class="row">
                <input class="form-control col" name="phonenumber" id="phonenumber"
                v-model="phonenumber" type="tel" placeholder="Enter your phone number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}" maxlength="10"/>
              </div> 
              <div class="row">
                <input class="form-control col" type="date" v-model="joinDate"/>
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

}
</script>

<style>

</style>