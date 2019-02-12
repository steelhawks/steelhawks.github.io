$(function(){

  var mentors = [
    {
      name: 'Joel Heitman',
      title: 'Head Coach',
      bio: 'Mr. Heitman'
    },
    {
      name: 'Susan Brustein',
      title: 'Coach',
      bio: 'Ms. Brustein'
    },
    {
      name: 'Joshua Raghunath',
      title: 'Coach',
      bio: 'Mr. Raghunath'
    },
    {
      name: 'David Stern',
      title: 'Coach',
      bio: 'Mr. Stern'
    },
    {
      name: 'Olan-Ray Frith',
      title: 'Mentor',
      bio: 'Olan'
    },
    {
      name: 'Weijian Zeng',
      title: 'Mentor',
      bio: 'Weijian'
    },
    {
      name: 'Kevin Goetzger',
      title: 'Mentor',
      bio: 'Kevin'
    },
    {
      name: 'Kenneth Leuci',
      title: 'Mentor',
      bio: 'Ken'
    },
    {
      name: 'John Tsai',
      title: 'Mentor',
      bio: 'Mr. Tsai'
    },
    {
      name: 'Lyndon Wong',
      title: 'Mentor',
      bio: 'Lyndon'
    },
    {
      name: 'Marcus Barbu',
      title: 'Mentor',
      bio: 'Marcus'
    },
    {
      name: 'Ishabul Haque',
      title: 'Mentor',
      bio: 'Ishabul'
    },
    {
      name: 'Sam Diaz',
      title: 'Mentor',
      bio: 'Sam'
    }
  ];

  Vue.component('page-mentors', {
      template: window.App.templates.pages.mentors,
      data: function(){
        return {
          mentors: mentors
        }
      },
      mounted: function(){
        initializeMasonry();
      }
    });

    App.routes.push(
      { name: 'mentors', path: '/mentors', component: Vue.component('page-mentors') }
    );

});
