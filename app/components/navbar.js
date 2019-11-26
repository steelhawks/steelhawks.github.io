$(function(){
    var vue = {
        page: ''
    };
    Vue.component('navbar', {
      template: window.App.templates.navbar,
      data: function(){
        return vue;
      },
      watch: {
          '$route' () {
            vue.page = this.$router.history.current.name;
          }
      },
      mounted: function(){
        vue.page = this.$router.history.current.name;
      }
    });
});
