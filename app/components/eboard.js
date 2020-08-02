$(function()
{
  //Constructor for creating new Executive Board Leader Objects
  function Leader(name, title, bio, pic, subteam)
  {
    this.name = name;
    this.title = title;
    this.bio = bio;
    this.pic = pic;
    this.subteam = subteam;
  }
  let genericPro = "/ctn/img/genericProfile.jpg";
  let boardHL = "/ctn/img/eboard20/";
  let leaders = [
    new Leader('Alex Muntean', 'President', "Hello everyone! My name is Alex Muntean and I'm president of the Steel Hawks robotics team. My position as president means I have several duties ranging from delegating instructions to the members of the team to organizing events and meetings and to being the primary link between the mentors and my fellow teammates. I am also a part of the mechanical department. I work with others to physically build the robot we use to compete. At the end of the day, the buck stops with me!", boardHL + 'alex.jpg'),
    new Leader('Megan Chang', 'Vice-President', "Hi! My name’s Megan and I am the Vice President of the Steel Hawks.  I’m in charge of making sure the team’s on task and that everything is running smoothly.  This includes everything from making sure we’re focused on building a fully functional robot and full robot CAD to helping our presentations for Chairman’s to securing a steady supply of clementines and mandarins to ward off viruses and keep blood sugar levels up.", boardHL + 'megan.jpg'),
    new Leader('Amar Maksumić', 'Vice-President of Fabrication and Software Engineering', "Hey! My name is Amar! During my first three years I was a coder. Now, I overlook the progress that our Fabrication and Software Engineering subteams make to ensure that we are on track to building a functioning robot and a wonderful ScoutApp. I love Bosnian food, but I will never say no to trying some other yummy dishes! Coder at heart!", boardHL + 'amar.JPG'),
    new Leader('Vishnupriya Thummala', 'Vice-President of Communication', "Hi guys! My name is Vishnupriya and I'm the Vice President of Communications for the team this year. I am responsible for keeping the team updated with the latest information via Discord. I am also a member of the mechanical subteam.", boardHL + "vishnupriya.jpg"),
    new Leader('Chris Gilson', 'Vice-President of Finance', "Hi I’m Chris Gilson and I’m the director of finance for the team! I am the lead grant writer and organizer of our team fundraisers. I am also part of the writing and presenting team for the chairman’s award, the FIRST award given to a team for their outreach and impact on their community.", boardHL + 'chris.jpg'),
    new Leader('Sharon Li','Vice-President of Public Relations',"Hey!! You can probably already tell what my name and position are, but everything else you may see on any of our platforms is managed by yours truly. I am responsible for bringing the Steel Hawks to you, just online though. Shameless promo, but if you're reading this, you might as well check out everything else we have in store.", boardHL + 'sharon.jpg')
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
