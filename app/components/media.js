$(function(){
  Vue.component('page-media', {
    template:window.App.templates.pages.media,
    data:function(){
      return{

      }
    },
    mounted:function(){

    }
  });

  App.routes.push(
    {name:'media', path:'/media', component: Vue.component('page-media')}
  );
});
