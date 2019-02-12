$(function(){
  Vue.component('page-merchandise', {
    template:window.App.templates.pages.merchandise,
    data:function(){
      return{

      }
    },
    mounted:function(){

    }
  });

  App.routes.push(
    {name:'merchandise', path:'/merchandise', component: Vue.component('page-merchandise')}
  );
});
