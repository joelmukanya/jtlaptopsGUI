<template>
    <div class="modal fade" :id="identify" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog ">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add or Update User</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body container">
                <fieldset class="row">
                    <legend class="display-2">Add or update user</legend>
                    <form class="form" @submit.prevent="addOrUpdateUser">
                        <div class="row">
                            <input class="form-control col" name="fullname" 
                            v-model="fullname" type="text" placeholder="Enter your fullname" required/>
                        </div>
                        <div class="row">
                            <input class="form-control col" name="email"                       v-model="email" type="email" placeholder="Enter your email" required/>
                        </div>
                        <div class="row">
                            <input class="form-control col" name="userpassword"
                            v-model="userpassword" type="password" placeholder="Enter your password" required/>
                        </div>
                        <div class="row">
                            <select class="form-select col" 
                            v-model="userRole" aria-label="Select your role">
                                <option name="userRole" value="admin" id="admin" selected>Admin</option>
                                <option name="userRole" value="user" id="user" selected>User</option>
                            </select>
                        </div>
                        <div class="row">
                            <input class="form-control col" name="phonenumber"
                            v-model="phonenumber" type="tel" placeholder="Enter your phone number" maxlength="10"/>
                        </div> 
                        <div class="row">
                            <input class="form-control col" type="date" v-model="joinDate"/>
                        </div>
                        <div class="row">
                        <label class="form-control text-danger" v-if="errMsg">{{errMsg}}</label>
                        <div class="row">
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </fieldset>
        </div>
        <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: ['identify'],
    data() {
        return {
            fullname: null, 
            email: null,
            userpassword: null,
            userRole: null,
            phonenumber: null,
            joinDate: null,
            errMsg: null
        }
    },
    methods: {
        addOrUpdateUser() {
            if(this.identify === "addUserModal") {
                console.log("Adding using");
                this.$store.dispatch('signUp', 
                   {
                       fullname: this.fullname , 
                       email: this.email ,
                       userpassword: this.userpassword ,
                       userRole: this.userRole ,
                       phonenumber: this.phonenumber ,
                       joinDate: this.joinDate  
                   }
               )
            }else {
                console.log("Update");
            }
        }
    }
}
</script>

<style>

</style>