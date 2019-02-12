$(function(){
  Vue.component('page-becomesponsor', {
    template:window.App.templates.pages.becomesponsor,
    data:function(){
      return{

      }
    },
    mounted:function(){

    }
  });

  App.routes.push(
    {name:'becomesponsor', path:'/becomesponsor', component: Vue.component('page-becomesponsor')}
  );
});
