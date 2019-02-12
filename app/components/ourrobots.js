$(function(){
  Vue.component('page-ourrobots', {
    template:window.App.templates.pages.ourrobots,
    data:function(){
      return{

      }
    },
    mount:function(){

    }
  });

  App.routes.push(
    {name:'ourrobots', path:'/ourrobots', component: Vue.component('page-ourrobots')}
  );
});
