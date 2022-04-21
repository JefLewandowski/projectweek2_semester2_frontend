<!--
<template>
  <div class="register">
    <div class="form-body">
      <div class="row">
        <div class="form-holder">
          <div class="form-content">
            <div class="form-items">
              <table class="table">
                <tbody>
                  <tr v-for="(item, idx) in products" :key="idx">
                    <td>{{ item.name }}</td>
                    <td>€{{ item.price }}</td>
                    <td>
                      <button
                        class="btn btn-sm btn-danger"
                        v-on:click="removeFromCart(item)"
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                  
                  <tr>
                    <th></th>
                    <th>${{ total }}</th>
                    <th></th>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
-->

<template>
  <div>
    <section class="h-100" style="background-color: #eee">
      <div class="container h-100 py-5">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-10">
            <div
              class="card rounded-3 mb-4"
              v-for="(item, idx) in products"
              :key="idx"
            >
              <div class="card-body p-4">
                <div
                  class="row d-flex justify-content-between align-items-center"
                >
                  <div class="col-md-3 col-lg-3 col-xl-3">
                    <p class="lead fw-normal mb-2">{{ item.name }}</p>
                    <p>{{ item.adults }} adults</p>
                    <p>{{ item.children }} children</p>
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex"></div>
                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 class="mb-0">€{{ item.price }}</h5>
                  </div>
                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <button
                      class="btn btn-sm btn-danger"
                      v-on:click="removeFromCart(idx)"
                    >
                      &times;
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <button type="button" class="btn btn-warning btn-block btn-lg">
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.inCart;
    },
  },
  name: "RegisterView",
  data() {
    return {
      name: "",
      desc: "",
      adults: 0,
      children: 0,
      price: 0,
      info: "",
    };
  },
  methods: {
    onRegisterClicked() {
      let product = {
        name: this.name,
        description: this.desc,
        adults: this.adults,
        children: this.children,
        price: this.price,
        extraINformation: this.info,
      };
      this.$store.dispatch("registerProduct", product);
    },
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap");

*,
body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
}

.register {
  height: 100%;
  background-color: #152733;
  overflow: hidden;
}

.form-holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.form-holder .form-content {
  position: relative;
  text-align: center;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 60px;
}

.form-content .form-items {
  border: 3px solid #fff;
  padding: 40px;
  display: inline-block;
  width: 100%;
  min-width: 540px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  text-align: left;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.form-content h3 {
  color: #fff;
  text-align: left;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 5px;
}

.form-content h3.form-title {
  margin-bottom: 30px;
}

.form-content p,
tr > * {
  color: #fff;
  text-align: left;
  font-size: 17px;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 30px;
}

.form-content label,
.was-validated .form-check-input:invalid ~ .form-check-label,
.was-validated .form-check-input:valid ~ .form-check-label {
  color: #fff;
}

.form-content input[type="text"],
.form-content input[type="password"],
.form-content input[type="email"],
.form-content select {
  width: 100%;
  padding: 9px 20px;
  text-align: left;
  border: 0;
  outline: 0;
  border-radius: 6px;
  background-color: #fff;
  font-size: 15px;
  font-weight: 300;
  color: #8d8d8d;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  margin-top: 16px;
}

.btn-primary {
  background-color: #6c757d;
  outline: none;
  border: 0px;
  box-shadow: none;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  background-color: #495056;
  box-shadow: none;
}

.form-content textarea {
  position: static !important;
  width: 100%;
  padding: 8px 20px;
  border-radius: 6px;
  text-align: left;
  background-color: #fff;
  border: 0;
  font-size: 15px;
  font-weight: 300;
  color: #8d8d8d;
  outline: none;
  resize: none;
  height: 120px;
  -webkit-transition: none;
  transition: none;
  margin-bottom: 14px;
}

.form-content textarea:hover,
.form-content textarea:focus {
  border: 0;
  background-color: #ebeff8;
  color: #8d8d8d;
}

.mv-up {
  margin-top: -9px !important;
  margin-bottom: 8px !important;
}

.invalid-feedback {
  color: #ff606e;
}

.valid-feedback {
  color: #2acc80;
}

input {
  margin: 1em 0;
}
</style>
