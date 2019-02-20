$(function(){
  var robots = [
    {
      year: "2019",
      game: "Deep Space",
      tubeLink: "https://www.youtube.com/embed/Mew6G_og-PI",
      bio: "Robots, stuck on planet Primus, must gather hatches and cargo to prepare their spaceships before the next Sandstorm arrives.",
      name: "",
      cad:""
    },
    {
      year: "2018",
      game: "Power Up!",
      tubeLink: "https://www.youtube.com/embed/HZbdwYiCY74",
      bio: "Robots place power cubes on scales and switches to take ownership and defeat the Final Boss.",
      robotpic: "/ctn/img/robots/2018.png",
      name: "Steel Hawking",
      cad:"",
    },
    {
      year: "2017",
      game: "Steamworks",
      tubeLink: "https://www.youtube.com/embed/sIoXR36DF2A",
      bio: "In an era where steampower reigns, robots collect fuel and deliver gears to prepare their airships for a long distance race.",
      robotpic: "/ctn/img/robots/2017.JPG",
      name: "Aquila",
      cad:"",
    },
    {
      year: "2016",
      game: "Stronghold",
      tubeLink: "https://www.youtube.com/embed/VqOKzoHJDjA",
      bio: "Robots need to fortify their defense while attacking the opponent's outer works and capturing their tower.",
      name: "Red Tail",
      cad:""
    },
    {
      year: "2015",
      game: "Recycle Rush",
      tubeLink: "https://www.youtube.com/embed/EtHq5U6SAsg",
      bio: "Teams pick and stack totes on scoring platforms, putting pool noodles (\"litter\") inside recycling containers, and putting the containers on top of scoring stacks of totes. ",
      name: "Raptor",
      cad:""
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
