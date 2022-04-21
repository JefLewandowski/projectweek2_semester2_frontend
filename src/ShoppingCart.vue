<template>
  <div>
    <router-link to="/cart">
      <button class="btn btn-primary navbar-btn">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        ( {{ numInCart }} )
      </button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "ShoppingCart",
  computed: {
    inCart() {
      return this.$store.getters.inCart;
    },
    numInCart() {
      return this.inCart.length;
    },
    total() {
      return this.inCart.reduce((acc, cur) => acc + cur.price, 0);
    },
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    },
  },
  methods: {
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
    },
    checkout() {
      if (this.isAuthenticated) {
        if (this.numInCart == 0) {
          alert("Your cart is empty!");
          return;
        }
      } else {
        alert("Please login to checkout");
        return;
      }
    },
  },
};
</script>
