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
    new Leader('Alex Muntean', 'President', "Hi!", genericPro),
    new Leader('Megan Chang', 'Vice-President', "Hi!", genericPro),
    new Leader('Amar Maksumić', 'Vice-President of Fabrication and Software Engineering', "Hey! My name is Amar! I overlook the progress that our Fabrication and Software Engineering subteams make to ensure that we are on track to building a functioning robot and a wonderful ScoutApp. I love Bosnian food, but I will never say no to trying some other yummy dishes! Coder at heart!", genericPro),
    new Leader('Vishnupriya Thummala', 'Vice-President of Communication', "Hi!", genericPro),
    new Leader('Chris Gilson', 'Vice-President of Finance', "Hi!", genericPro),
    new Leader('Sharon Li','Vice-President of Public Relations',"Hi!",genericPro)
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
