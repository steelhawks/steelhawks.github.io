$(function(){

  var component = {
    name: 'page-frc',
    path: '/frc',
    template_url: 'app/components/frc.html',
    init: function(html){
      return  {
        template:html,
        data: function(){
          return {
            sponsors: App.sponsors
          }
        },
        mounted: function(){

          
        }
      }    
    }
  };

 
    Vue.component(component.name, 
      function(resolve, reject){
        $.get(component.template_url, function(html){
          resolve(component.init(html));
        });
    });

    App.routes.push( { name: component.name, 
                       path: component.path, 
                       component: Vue.component(component.name) 
      }
    );

});
