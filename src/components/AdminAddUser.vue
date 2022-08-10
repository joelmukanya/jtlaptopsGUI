<template>
    <div class="modal fade" :id="identify" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog ">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <fieldset>
                <legend class="display-2">Create a user account</legend>
                <form class="form" @submit.prevent="userRegistration">
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
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
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
            joinDate: null 
        }
    },
    methods: {
        userRegistration() {
            return this.$store.dispatch('signUp', 
                {
                    fullname: this.fullname , 
                    email: this.email ,
                    userpassword: this.userpassword ,
                    userRole: this.userRole ,
                    phonenumber: this.phonenumber ,
                    joinDate: this.joinDate  
                }
            )
        }
    }
}
</script>

<style>

</style>