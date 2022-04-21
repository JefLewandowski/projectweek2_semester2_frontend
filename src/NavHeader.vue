<template>
  <div class="navbar">

        <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto"><a href="#">Space invaders</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo me-auto"><img src="../assets/img/logo.png" alt="" class="img-fluid"></a>-->

            <nav id="navbar" class="navbar">
            <ul>
              <router-link tag="li" to="/"><a class="nav-link scrollto active" href="#hero">Home</a></router-link>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto" href="#services">Services</a></li>
              <li>
                <a class="nav-link scrollto" href="#portfolio">Our hotel</a>
              </li>
              <li v-if="!isAuthenticated">  
                <router-link to="/">
                  <a @click="onLoginClicked" class="getstarted" href="#">Login</a>
                </router-link>



              </li>
              <router-link v-if="isAuthenticated" tag='li' to="/">
                <a @click="onLogoutClicked" class="getstarted" href="#">Logout</a>
              </router-link>


              <router-link v-if="isPartner" to="/register" tag='li'><a class="nav-link">Register</a></router-link>
                          <li>
            <ShoppingCart />
            </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
            <!--
            <a href="#"
              ><img
                src="./assets/img/shopping-cart.png"
                alt="shopping cart"
                style="width: 75%"
            /></a>-->
    </nav>
      </div>
    </header>
    <!-- End Header -->
  </div>
</template>

<script>
import ShoppingCart from './ShoppingCart.vue'
export default {
  components: { ShoppingCart },
  name: 'NavHeader',
  computed: {
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : ''
    },
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    },
    isPartner() {
      return this.$store.state.user.partner;
    },
  },
  methods: {
    onLoginClicked() {
      window.location = this.$store.state.endpoints.login;
    },
    onLogoutClicked() {
      this.$store.commit("logout");
    },
    onRegisterClicked() {
      let obj = { 'description': 'description', 'id': parseInt("1"), 'price': parseInt("1000"), 'quantity': parseInt("10"), 'thumbnail_url': "thumbnail_url", 'title': "title" }
      this.$store.dispatch("registerProduct", obj);
    },
    getUserName() {
      return this.$store.state.user.name;
    }
  }
}
</script>