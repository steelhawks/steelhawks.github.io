$(function(){
  Vue.component('page-resources', {
    template: window.App.templates.pages.resources,
    data:function(){
      return{

      }
    },
    mounted:function(){

    }
  });

  App.routes.push(
    {name: 'resources', path: '/resources', component: Vue.component('page-resources')}
  );
});
