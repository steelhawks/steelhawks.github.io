$(function(){
  Vue.component('page-test', {
      template: window.App.templates.pages.test,
      data: function(){
        return {
          tests:App.test
        }
      },
      mounted: function(){
      }
    });

    App.routes.push(
      { name: 'test', path: '/test', component: Vue.component('page-test') }
    );

});
