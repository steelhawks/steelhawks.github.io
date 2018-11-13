
$(function(){

    Vue.component('page-main', {
      template: window.App.templates.pages.main,
      data: function(){
        return {
          sponsors: App.sponsors
        }
      },
      mounted: function(){
         $(".volume.btn").click(
           function(){
             var video = document.getElementById("video");
             video.muted = !video.muted;
           }
         );

         Pixlee.init({apiKey:'y7K3EYgGBl9lza5AsEnj'});
         Pixlee.addSimpleWidget({widgetId:'3570'});

      }
    });

    App.routes.push(
      { name: 'main', path: '/', component: Vue.component('page-main') }
    );

});
