$(function(){

  // var townsendmap = L.map('townsend-map',{
  //   center: [40.7349368,-73.8237583],
  //   zoom: 12
  // });

  var component = {
    name: 'page-contact',
    path: '/contact'
  };

  Vue.component(component.name,{
    template: window.App.templates.pages.contact,
    data: function(){
        return {
        }
    },
  });

    App.routes.push( { name: component.name,
                       path: component.path,
                       component: Vue.component(component.name)
      }
    );

});
