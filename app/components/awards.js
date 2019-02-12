$(function(){
  Vue.component('page-awards', {
    template:window.App.templates.pages.awards,
    data:function(){
      return{

      }
    },
    mounted:function(){

    }
  });

  App.routes.push(
    {name:'awards', path:'/awards', component: Vue.component('page-awards')}
  );
});
