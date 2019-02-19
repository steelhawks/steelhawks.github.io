$(function(){
  var boardHL = "/ctn/img/eboard19/";
  var leaders = [
    {
      name: 'Brianna Raghunath',
      title: 'President',
      bio: "Hi everyone! I'm Brianna and I'm the President of the Steel Hawks.",
      pic: boardHL + "brianna.jpeg"
    },
    {
      name: 'Joshua Tsai',
      title: 'Vice President',
      bio: "Hey everyone! I'm Joshua and I'm one of the Vice Presidents for the Steel Hawks.",
      pic: boardHL + "joshua.jpeg"
    },
    {
      name: 'Eric Wu',
      title: 'Vice President',
      bio: "Hi everyone! I'm Eric and I'm one of the Vice Presidents for the Steel Hawks.",
      pic: boardHL + "eric.jpeg"
    },
    {
      name: 'Annabella Li',
      title: 'Financial Secretary',
      bio: "Hey everyone! I'm Annabella and I'm the Financial Secretary for the Steel Hawks.",
      pic: boardHL + "annabella.jpeg"
    },
    {
      name: 'Kelvin Yip',
      title: 'Communication Secretary',
      bio: "Hi everyone! My name is Kelvin and I'm the Communication Secretary for the Steel Hawks. I update all team members with latest information and oversee the team's Discord Server. I also program and currently manage the Steel Hawks Website.",
      pic: boardHL + "kelvin.jpeg"
    },
    {
      name: 'Togay Atmaca',
      title: 'Public Relations Manager',
      bio: "Hey everyone! My name's Togay and I'm one of the PR Managers for the Steel Hawks. I look for outreach opportunities for the team and help host our own events. I also take part in writing and presenting the Chairman's award, an award given by FIRST that highlights a team's cumulative outreach efforts and impact on their community.",
      pic: boardHL + "togay.jpeg"
    },
    {
      name: 'Amrita Roy',
      title: 'Public Relations Manager',
      bio: "Hi everyone! I'm Amrita and I'm one of the PR Managers for the Steel Hawks.",
      pic: boardHL + "amrita.jpeg"
    },
    // {
    //   name: 'Aarti Patel',
    //   title: 'Inventory Secretary',
    //   bio: "Hello! My name is Aarti and I am the inventory manager of the team. The work I contribute makes sure that our team runs in an orderly fashion; I help keep track of all the tools we have and where we keep them. If only I applied the same philosophy to my room..."
    // },
    {
      name: 'Samantha Wong',
      title: 'Strategy Director',
      bio: "Hi! My name's Samantha and I'm the team's strategy director. I create strategies for the team during competition using the team's scouting data. My job as the team's strategy director goes hand in hand with my job as the team's lead scout. I'm a junior who really needs to study for my AP classes as much as I study the manual.",
      pic: boardHL + "samantha.jpeg"
    },
    {
      name: 'Raymond Zhuo',
      title: 'Head of Photography',
      bio: "Hi! My name is Raymond and I'm the Director of Photography and Videography. I work to document the team's achievements, failures, happiest, and stressful moments. I also work with the team to create the Chairman's video every year. I'm pretty chill and I will always help my team with whatever they need help with.",
      pic: boardHL + "raymond.jpeg"
    },
    // {
    //   name: 'Kyle Lai',
    //   title: 'Safety Captain',
    //   bio: "I'm Kyle! I keep everyone safe during robotics, whether they're working in the lab or not."
    // }
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
