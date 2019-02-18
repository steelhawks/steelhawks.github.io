$(function(){

  var awards = [
    {
      name:'Regional Engineering Inspiration Award',
      year:'2018',
      event:'SBPLI Long Island Regional #2'
    },
    {
      name:'Judges Award',
      year:'2018',
      event:'Hudson Valley Regional'
    },
    {
      name:'Regional Winners',
      year:'2017',
      event:'Hudson Valley Regional',
      // picture:'/ctn/img/2017HVRWinner.png'
    },
    {
      name:'FIRST Deans List Finalist Award (Phyllis Alinsao)',
      year:'2017',
      event:'Hudson Valley Regional'
    },
    {
      name:'Regional Engineering Inspiration Award',
      year:'2015',
      event:'New York City Regional'
    },
    {
      name:'Gracious Professionalism Award sponsored by Johnson & Johnson',
      year:'2015',
      event:'Carson Division'
    },
    {
      name:'Gracious Professionalism Award sponsored by Johnson & Johnson',
      year:'2015',
      event:'SPBLI Long Island Regional'
    },
    {
      name:'Gracious Professionalism Award sponsored by Johnson & Johnson',
      year:'2014',
      event:'New York City Regional'
    },
  ];



  Vue.component('page-awards', {
    template:window.App.templates.pages.awards,
    data:function(){
      return{
        awards: awards
      }
    },
    mounted:function(){
      initializeMasonry();
    }
  });

  App.routes.push(
    {name:'awards', path:'/awards', component: Vue.component('page-awards')}
  );
});
