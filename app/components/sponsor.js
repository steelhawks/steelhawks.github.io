$(function(){

  Vue.component('page-sponsor', {
      template: window.App.templates.pages.sponsor,
      data: function(){
        return {
          sponsors:App.sponsors
        }
      },
      mounted: function(){
      }
    });

    App.routes.push(
      { name: 'sponsor', path: '/sponsor', component: Vue.component('page-sponsor') }
    );

});
