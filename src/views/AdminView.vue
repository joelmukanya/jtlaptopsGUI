<template>
  <div class="container">
    <div class="row my-2">
      <div class="col-md">
        <button class="btn btn-primary" 
        data-bs-toggle="modal" data-bs-target="#addUserModal">Add New User</button>
        <AddOrUpdateUser methodArg="post" identify="addUserModal"/>
      </div>
      <div class="col-md">
        <button class="btn btn-primary">Add New Product</button>
      </div>
    </div>
    <h2 class="display-2">User</h2>
    <div class="row table-responsive-md setTableOff">
      <table class="table table-hover">
        <thead class="bg-gradient">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Fullname</th>
            <th scope="col">Email</th>
            <th scope="col">userRole</th>            
            <th scope="col">Phone number</th>
            <th scope="col">Joined Date</th>
            <th scope="col">Cart</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td data-title="ID">{{user.id}}</td>
            <td data-title="Fullname">{{user.fullname}}</td>
            <td data-title="email">{{user.email}}</td>
            <td data-title="User Role">{{user.userRole}}</td>
            <td data-title="Phone number">{{user.phonenumber}}</td>
            <td data-title="Joined Date">{{user.joinDate}}</td>
            <td data-title="Cart">{{user.cart}}</td>
            <td data-title="Edit">
              <i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#updateUserModal"></i>
              <AddOrUpdateUser methodArg="put" identify="updateUserModal"/>
            </td>
            <td data-title="Delete">
              <i class="bi bi-trash3-fill"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 class="display-2">Product</h2>
    <div class="row table-responsive-md setTableOff">
      <table class="table table-hover">
        <thead class="bg-gradient">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Available In Store</th>
            <th scope="col">User ID</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prod, index) in products" :key="index">
            <td data-title="ID">{{prod.id}}</td>
            <td data-title="Title">{{prod.title}}</td>
              <td data-title="Category">{{prod.category}}</td>
              <td data-title="Description">{{prod.prodDescription}}</td>
            <td data-title="Image">
              <img class="img-thumbnail sameSize" :src="prod.imgURL" :alt="prod.title"/>
            </td>
            <td data-title="Price" >R {{prod.price}}</td>
            <td data-title="Quantity" >{{prod.quantity}}</td>
            <td data-title="Available In Store">{{prod.availableInStore == 1? "Available": "Not Available"}}</td>
            <td data-title="User ID">{{prod.userID}}</td>
            <td data-title="Edit">
              <i class="bi bi-pencil-square"></i>
            </td>
            <td data-title="Delete">
              <i class="bi bi-trash3-fill"></i>
            </td>
          </tr>
        </tbody>
      </table>      
    </div>
  </div>
</template>

<script>
import AddOrUpdateUser from '@/components/AddOrUpdateUser.vue';
export default {
  computed: {
    users() {
      return this.$store.state.users
    },
    products() {
      return this.$store.state.products
    }
  },
  components: {
    AddOrUpdateUser
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
    this.$store.dispatch('fetchProducts');
  }

}
</script>

<style>

</style>