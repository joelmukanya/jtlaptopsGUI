<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark text-white">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">Home</router-link> |
          </li>
          <li class="nav-item">
            <router-link to="/admin">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ourProducts">Products</router-link>
          </li>
        </ul>
        <!-- User Account -->
        <ul class="navbar-nav ms-auto mb-2">
          <li class="nav-item">
            <router-link to="/login">Login</router-link> |
          </li>
          <li class="nav-item">
            <router-link to="/signup">Signup</router-link>
          </li>          
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
}
</script>
