$(function(){

  Vue.component('page-outreach', {
      template: window.App.templates.pages.outreach,
      data: function(){
        return {
        }
      },
      mounted: function(){
      }
    });

    App.routes.push(
      { name: 'outreach', path: '/outreach', component: Vue.component('page-outreach') }
    );

});
