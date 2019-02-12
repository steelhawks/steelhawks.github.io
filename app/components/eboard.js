$(function(){
  var leaders = [
    {
      name: 'Brianna Raghunath',
      title: 'President',
      bio: 'Class of 2019'
    },
    {
      name: 'Joshua Tsai',
      title: 'Vice President',
      bio: 'Class of 2019'
    },
    {
      name: 'Eric Wu',
      title: 'Vice President',
      bio: 'Class of 2019'
    },
    {
      name: 'Annabella Li',
      title: 'Financial Secretary',
      bio: 'Class of 2020'
    },
    {
      name: 'Kelvin Yip',
      title: 'Communication Secretary',
      bio: 'Class of 2020'
    },
    {
      name: 'Togay Atmaca',
      title: 'Public Relation Manager',
      bio: 'Class of 2020'
    },
    {
      name: 'Amrita Roy',
      title: 'Public Relation Manager',
      bio: 'Class of 2020'
    },
    {
      name: 'Aarti Patel',
      title: 'Inventory Secretary',
      bio: 'Class of 2020'
    },
    {
      name: 'Samantha Wong',
      title: 'Strategy Director',
      bio: 'Class of 2020'
    },
    {
      name: 'Raymond Zhuo',
      title: 'Head of Photography',
      bio: 'Class of 2020'
    },
    {
      name: 'Kyle Lai',
      title: 'Safety Captain',
      bio: 'Class of 2019'
    }
  ];

  Vue.component('page-eboard', {
    template:window.App.templates.pages.eboard,
    data:function(){
      return{
        leaders: leaders
      }
    },
    mounted: function(){

    }
  });

  App.routes.push(
    {name: 'eboard', path: '/eboard', component: Vue.component('page-eboard')}
  );
});
