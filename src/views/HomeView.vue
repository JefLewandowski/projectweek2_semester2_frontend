<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <div class="container-fluid overflow-hidden p-0">
      <div class="row g-0">
        <div lc-helper="background" class="col-md-6 order-md-2" style="min-height: 100vh; background-size: cover; background-position: center; background-image: url('./hotelfinish.jpg');">
    
        </div>
        <div class="col-md-6 order-md-1 my-auto text-center" style="padding:10vw">
    
          <div class="lc-block mb-3">
            <div editable="rich">
              <h2>Space Invaders</h2>

              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nullam tincidunt enim ac augue suscipit rhoncus. Donec ante erat, hendrerit sed
                eleifend et, dapibus at leo. Mauris bibendum mi ut dui sagittis volutpat. </p>
    
            </div>
    
          </div>
    
          <div class="lc-block">
            <a class="btn btn-primary" href="#" role="button">Click me, I'm a button</a>
          </div><!-- /lc-block -->
    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
  }
}
</script>
