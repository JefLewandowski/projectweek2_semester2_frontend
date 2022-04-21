<template>
  <div class="box">
    <div v-if="isPartner">
      <router-link to="/edit?type=1">
        <p>Edit</p>
      </router-link>
    </div>
    <h3>{{ item.type }}</h3>
    <h4><sup>€</sup>{{ item.price }}<span>One night</span></h4>
    <ul>
      <li>Adults: {{ item.adults }}</li>
      <li>Children: {{ item.children }}</li>
    </ul>
    <button
      :disabled="item.quantity === 0"
      v-on:click="addToCart(item)"
      class="buy-btn"
    >
      Book now!
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart(item) {
      alert("item added");
      this.$store.commit("addToCart", item);
    },
  },
  name: "MyItem",
  props: ["item"],
};
</script>
