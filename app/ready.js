$(function(){

  const router = new VueRouter({
    mode: 'history',
    routes: App.routes
  });

  // Create and mount the root instance.
  // Make sure to inject the router with the router option to make the
  // whole app router-aware.
  const app = new Vue({
    router
  }).$mount('#app');

  //
  // App.utils.video_sizing();



});
