$(function(){

  function award(name, year, event){
      this.name= name;
      this.year = year;
      this.event = event;
  }

  var awards = [
    new award("Regional Chairman's Award",'2020','New York City Regional'),
    new award('Regional Engineering Inspiration Award','2018','SPBLI Long Island Regional #2'),
    new award('Judges Award', '2018', 'Hudson Valley Regional'),
    new award('Regional Winners', '2017', 'Hudson Valley Regional'),
    new award('FIRST Deans List Finalist Award (Phyllis Alinsao)', '2017', 'Hudson Valley Regional'),
    new award('Regional Engineering Inspiration Award', '2015', 'New York City Regional'),
    new award('Gracious Professionalism Award sponsored by Johnson & Johnson','2015','Carson Division'),
    new award('Gracious Professionalism Award sponsored by Johnson & Johnson','2015','SPBLI Long Island Regional'),
    new award('Gracious Professionalism Award sponsored by Johnson & Johnson','2014','New York City Regional')
  ];

  // {
  //   name:'Regional Winners',
  //   year:'2017',
  //   event:'Hudson Valley Regional',
  //   // picture:'/ctn/img/2017HVRWinner.png'
  // },

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
