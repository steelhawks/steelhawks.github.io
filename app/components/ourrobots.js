$(function(){
  var robots = [
    {
      year: "2019",
      game: "Deep Space",
      tubeLink: "https://www.youtube.com/embed/Mew6G_og-PI",
      bio: "Robots, stuck on planet Primus, must gather hatches and cargo to prepare their spaceships before the next Sandstorm arrives.",
      name: "Coming soon!"
    },
    {
      year: "2018",
      game: "Power Up!",
      tubeLink: "https://www.youtube.com/embed/HZbdwYiCY74",
      bio: "Robots place power cubes on scales and switches to take ownership and defeat the Final Boss.",
      name: "Steel Hawking"
    },
    {
      year: "2017",
      game: "Steamworks",
      tubeLink: "https://www.youtube.com/embed/EMiNmJW7enI",
      bio: "In an era where steampower reigns, robots collect fuel and deliver gears to prepare their airships for a long distance race.",
      name: "Aquila"
    },
    {
      year: "2016",
      game: "Stronghold",
      tubeLink: "https://www.youtube.com/embed/VqOKzoHJDjA",
      bio: "Robots need to fortify their defense while attacking the opponent's outer works and capturing their tower.",
      name: "Red Tail"
    }
  ];

  Vue.component('page-ourrobots', {
    template:window.App.templates.pages.ourrobots,
    data:function(){
      return{
        robots: robots
      }
    },
    mount:function(){

    }
  });

  App.routes.push(
    {name:'ourrobots', path:'/ourrobots', component: Vue.component('page-ourrobots')}
  );
});
