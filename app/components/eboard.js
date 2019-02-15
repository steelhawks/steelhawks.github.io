$(function(){
  var leaders = [
    {
      name: 'Brianna Raghunath',
      title: 'President',
      bio: "Hi everyone! I'm Brianna and I'm the President of the Steel Hawks."
    },
    {
      name: 'Joshua Tsai',
      title: 'Vice President',
      bio: "Hey everyone! I'm Joshua and I'm one of the Vice Presidents for the Steel Hawks."
    },
    {
      name: 'Eric Wu',
      title: 'Vice President',
      bio: "Hi everyone! I'm Eric and I'm one of the Vice Presidents for the Steel Hawks."
    },
    {
      name: 'Annabella Li',
      title: 'Financial Secretary',
      bio: "Hey everyone! I'm Annabella and I'm the Financial Secretary for the Steel Hawks."
    },
    {
      name: 'Kelvin Yip',
      title: 'Communication Secretary',
      bio: "Hi everyone! I'm Kelvin and I'm the Communication Secretary for the Steel Hawks. I also manage the Steel Hawks Website."
    },
    {
      name: 'Togay Atmaca',
      title: 'Public Relations Manager',
      bio: "Hey everyone! My name's Togay and I'm one of the PR Managers for the Steel Hawks. I look for outreach opportunities for the team and help host our own events. I also take part in writing and presenting the Chairman's award, an award given by FIRST that highlights a team's cumulative outreach efforts and impact on their community."
    },
    {
      name: 'Amrita Roy',
      title: 'Public Relations Manager',
      bio: "Hi everyone! I'm Amrita and I'm one of the PR Managers for the Steel Hawks."
    },
    {
      name: 'Aarti Patel',
      title: 'Inventory Secretary',
      bio: "Hey everyone! I'm Aarti and I'm the Inventory Secretary for the Steel Hawks."
    },
    {
      name: 'Samantha Wong',
      title: 'Strategy Director',
      bio: "Hi everyone! I'm Samantha and I'm the Strategy Director for the Steel Hawks."
    },
    {
      name: 'Raymond Zhuo',
      title: 'Head of Photography',
      bio: "Hey everyone! I'm Raymond and I'm the Head of Photography for the Steel Hawks."
    },
    {
      name: 'Kyle Lai',
      title: 'Safety Captain',
      bio: "I'm Kyle! I keep everyone safe during robotics, whether they're working in the lab or not."
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
