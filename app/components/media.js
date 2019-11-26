$(function(){

  var pages = [
  {
    name:"/ctn/img/marchNLp1.png"
  },
  {
    name:"/ctn/img/marchNLp2.png"
  },
  ];

  Vue.component('page-media', {
    template:window.App.templates.pages.media,
    data:function(){
      return{
        pages: pages
      }
    },
    mounted:function(){

    }
  });

  App.routes.push(
    {name:'media', path:'/media', component: Vue.component('page-media')}
  );
});
