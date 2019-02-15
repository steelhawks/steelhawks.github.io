$(function(){

  var mentors = [
    {
      name: 'Joel Heitman',
      title: 'Head Coach',
      bio: 'Mr. Heitman is the Head Coach of the Steel Hawks.'
    },
    {
      name: 'Susan Brustein',
      title: 'Coach',
      bio: 'Ms. Brustein is a coach for the Steel Hawks.'
    },
    {
      name: 'Joshua Raghunath',
      title: 'Coach',
      bio: 'Mr. Raghunath is a coach for the Steel Hawks.'
    },
    {
      name: 'David Stern',
      title: 'Coach',
      bio: 'Mr. Stern is a coach for the Steel Hawks.'
    },
    {
      name: 'Olan-Ray Frith',
      title: 'Mentor',
      bio: 'Olan is a mentor for the Steel Hawks.'
    },
    {
      name: 'Weijian Zeng',
      title: 'Mentor',
      bio: 'Weijian is a mentor for the Steel Hawks.'
    },
    {
      name: 'Kevin Goetzger',
      title: 'Mentor',
      bio: 'Kevin is a mentor for the Steel Hawks.'
    },
    {
      name: 'Kenneth Leuci',
      title: 'Mentor',
      bio: 'Ken is a mentor for the Steel Hawks.'
    },
    {
      name: 'John Tsai',
      title: 'Mentor',
      bio: 'Mr. Tsai is a mentor for the Steel Hawks.'
    },
    {
      name: 'Lyndon Wong',
      title: 'Mentor',
      bio: 'Lyndon is a mentor for the Steel Hawks.'
    },
    {
      name: 'Marcus Barbu',
      title: 'Mentor',
      bio: 'Marcus is a mentor for the Steel Hawks.'
    },
    {
      name: 'Ishabul Haque',
      title: 'Mentor',
      bio: 'Ishabul is a mentor for the Steel Hawks.'
    },
    {
      name: 'Sam Diaz',
      title: 'Mentor',
      bio: 'Sam is a mentor for the Steel Hawks.'
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
