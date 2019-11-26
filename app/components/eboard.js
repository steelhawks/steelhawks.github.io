$(function(){

  function Leader(name, title, bio, pic, subteam)
  {
    this.name = name;
    this.title = title;
    this.bio = bio;
    this.pic = pic;
    this.subteam = subteam;
  }

  let genericPro = "/ctn/img/genericProfile.jpg"
  let boardHL = "/ctn/img/eboard19/";
  let leaders = [
    new Leader('Togay Atmaca', 'President', "Hey everyone! My name's Togay and I'm one of the PR Managers for the Steel Hawks. I look for outreach opportunities for the team and help host our own events. I also take part in writing and presenting the Chairman's award, an award given by FIRST that highlights a team's cumulative outreach efforts and impact on their community.", boardHL + "togay.jpeg"),
    new Leader('James Hopkins', 'Vice-President', "Hi!", genericPro),
    new Leader('Shara Bhuiyan', 'Vice-President', "Hi!", genericPro),
    new Leader('Samantha Wong', 'Vice-President', "Hi! My name's Samantha and I'm the team's strategy director. I create strategies for the team during competition using the team's scouting data. My job as the team's strategy director goes hand in hand with my job as the team's lead scout. I'm a junior who really needs to study for my AP classes as much as I study the manual.", boardHL + "samantha.jpeg"),
    new Leader('Aarti Patel', 'Inventory Secretary', "Hello! My name is Aarti and I am the inventory manager of the team. The work I contribute makes sure that our team runs in an orderly fashion; I help keep track of all the tools we have and where we keep them. If only I applied the same philosophy to my room...", genericPro),
    new Leader('Neeherika Kotimreddy','Safety Officer','',genericPro),
    new Leader('Megan Chang','Head of CAD', "Hi, I'm Megan!" ,genericPro),
    new Leader('Shane Werther','Head of Mechanical', "Hi, I'm Shane!",genericPro),
    new Leader('Betty Jin','Head of Electrical',"Hi, I'm Betty!",genericPro),
    new Leader('Raymond Zhuo', 'Head of Photography', "Hi! My name is Raymond and I'm the Director of Photography and Videography. I work to document the team's achievements, failures, happiest, and stressful moments. I also work with the team to create the Chairman's video every year. I'm pretty chill and I will always help my team with whatever they need help with.", boardHL + "raymond.jpeg"),
    new Leader('Amar Maksumic','Head of Software Engineering',"Hello, soy Amar.",genericPro),
    new Leader('Sharon Li','Head of Media',"Hello, I'm Sharon!" ,genericPro),
    new Leader('Amrita Roy', 'Head of Chairmans', "Hi everyone! I'm Amrita and I'm the Head of Chairmans for the Steel Hawks.", boardHL + "amrita.jpeg"),
    new Leader('Chris Gilson','Head of Finance',"Hi I'm Chris!",genericPro),
    new Leader('Michael Kim', 'Head Of Scouting', "Hi! My name's Samantha and I'm the team's strategy director. I create strategies for the team during competition using the team's scouting data. My job as the team's strategy director goes hand in hand with my job as the team's lead scout. I'm a junior who really needs to study for my AP classes as much as I study the manual.", genericPro),
    new Leader('Kelvin Yip', 'Head of Communications', "Hi everyone! My name is Kelvin and I'm the Head of Communications for the Steel Hawks. I update all team members with latest information and oversee the team's Discord Server. I am the lead programmer for the Scout App and Steel Hawks website.",boardHL + "kelvin.jpeg"),
    new Leader('Clara Graceanu', 'Head of Public Relations', "Hi! I'm Clara!",genericPro)
  ];
  //   {
  //     name: 'Brianna Raghunath',
  //     title: 'President',
  //     bio: "Hi everyone! I'm Brianna and I'm the President of the Steel Hawks.",
  //     pic: boardHL + "brianna.jpeg"
  //   },
  // ];

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
