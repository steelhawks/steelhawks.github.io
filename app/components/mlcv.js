$(function(){
    Vue.component('page-mlcv', {
      template:window.App.templates.pages.mlcv,
      data:function(){
        return{
  
        }
      },
      mounted:function(){
  
      }
    });
  
    App.routes.push(
      {name:'mlcv', path:'/mlcv', component: Vue.component('page-mlcv')}
    );
  });
  