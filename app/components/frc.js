
$(function(){

  var component = {
    name: 'page-frc',
    path: '/frc'
  };

  Vue.component(component.name,{
    template: window.App.templates.pages.frc,
    data: function(){
        return {
          sponsors: App.sponsors
        }
    },
  });

    App.routes.push( { name: component.name,
                       path: component.path,
                       component: Vue.component(component.name)
      }
    );

});
