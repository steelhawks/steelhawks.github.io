
$(function(){

var subteams = [
  { name: 'Mechanical',
     icon: 'ti-settings',
    description: "We are the subteam responsible for designing and creating a machine set to accomplish a task based on the game that comes out each year. We design and prototype beta robots before moving to the final design. Once we have each element of the robot finalized, we're responsible for putting it together in the most efficient way possible. We have to keep in mind factors such as drop centers, turning radius, height, speed, weight.",
    members: "James Hopkins, Shane Werther, Carolina Narvaez, Courtney Chan, Adam Ganpat, Alex Muntean, Alisha Ansari, Balraj Chahal, Benjamin Zeller, Bob Fang, Danielle Chiu, Darren Leong, David Muratov, Edwin Khew, Elsa Oreen, Esmond Lau, Felecia Hassan, Heidy Mendez, Ilan Matsuyoshi, Jackson DeMasi, Jasmine Fleming, Jeremy Aziel, Jessica Jimenez, Jocelyn Wang, Joshua Ashvil, Julie Li, Karan Ajmera, Keane Lupercio, Krishna Baliga, Nathan Lin, Nicholas Rao, Priyota Saha"
  },
  {
    name: 'Electrical',
    icon: 'ti-pulse',
    description: 'Our subteam focuses on wiring circuits and creating the board for our robot. We also work with pneumatics, which involves the use of pressurized air to move mechanisms.',
    members: "Eric Wu, Arbid Yusuf, Betty Jin, Eric Zhao, Akash Persaud, Samuel Tsai, Keith Yeung, Minnie Lee, John Pabololat, Neeharika Kotimreddy"
  },
  {
    name: '</> Programming',
    icon: '',
    description: "The Programming Sub-Team is the software side to the team. In programming, we develop the robot code for the autonomous (self-controlled) and teleoperated (driver controlled) periods of the game, vision for the robot so that it is able to detect specific game pieces and landmarks on the field (depending on the year's game), the Scout App which the scouters use to collect and process data, and the team website.",
    members: "Amar Maksumic, Shara Bhuiyan, Hali Huang, Kelvin Yip, Michael Kim, Andy Hoo, Ethan Diep, Izegbuwa Adun, Jonathan Suero"
  },
  {
    name: 'Drive Team',
    icon: 'ti-car',
    description:"Potential drive team members will review the rules and learn different strategies in order to be well equipped for a match. We will learn the different parts of the robot and understand how they work with one another in order to provide feedback on the robots performance. On occasion, we will get to drive the robot. ",
    members: "Joshua Tsai"
  },
  {
    name: "Scouting",
    icon: 'ti-eye',
    description: "We focus on data collection and strategy which is then used during competition. We’ll teach you the ins and outs of last year's game and how to make strategies for it with the assistance of our app. ",
    members: "Samantha Wong"
  },
  {
    name: "Public Relations",
    icon: 'ti-face-smile',
    description:"Public Relations is the subteam that focuses on developing the brand of the team and making it marketable.\n\nWe will do outreach at public events, where we explain to any interested visitors about our team and what robotics entails. We will do outreach at school, where we will use the power of flyers, social media, and announcements to inform our peers about any robotics events. We will also  help the financial subteam with writing grants, as well as reach out to sponsors with thank-you letters, keeping them updated with the team as well as thanking them for their valuable contributions.",
    members: "Togay Atmaca, Amrita Roy, Christopher Gilson, Clara Graceanu"
  },
  {
    name: "Finance",
    icon: 'ti-money',
    description: "The finance department focuses on fundraising which will help all aspects of robotics run at their full capacity.  Join our finance family which encompasses both humanities and STEM so get the best of both worlds when learning about marketing while improving your writing abilities! ",
    members: "Annabella Li"
  },
  {
    name: "Media",
    icon: 'ti-video-clapper',
    description: "In this subteam we document our team in an artistic way. We also work with the Public Relations subteam to chairmans to create the chairmans video. ",
    members: "Raymond Zhuo, Aarti Patel, Katrina Soniprasad, Andrew Mak"
  },
  {
    name: 'CAD',
    icon: 'ti-ruler-pencil',
    description: "Our subteam makes dreams become reality. We make 3D models of mechanisms and prototypes. We also make parts to be 3D printed. We further aid the mechanical subteam with the prototyping process.",
    members: "Jessica Lu, Megan Chang, Eric Han"
  },
  {
    name: "Animation",
    icon: 'ti-widget',
    description: "We use Blender, a 3D animation software, to create any animations the team needs. We model, texture, and animate different objects, including characters.",
    members: "Brianna Raghunath, Ivan Qian"
  },
  {
    name: "Safety",
    icon: 'ti-heart',
    description: "We ensure the safety of the team. We keep members safe whether they are in the lab working on the robot or not.",
    members: "Kyle Lai"
    }
  ]

  // var leaders = [
  //   {
  //     name:"",
  //     title:"President",
  //     bio: "Phyllis joined the Steel Hawks in her freshman year, during the 2014-2015 season (FRC Recycle Rush). She soon developed a close friendship with Vice President Janki and the two dedicated hours of time to learning how to build the best drivetrain for any game. Her work didn't stop there, however, as she attended workshops and various programs to learn mechanics and CAD, and even plans on teaching a robotics course in the Philippines ine the summer of 2017. For these and many other reasons, she was easily elected as the president of the Steel Hawks.",
  //     pic: leader_image_dir + "phyllis.jpg"
  //   },
  //   {
  //     name:"Daniel Sotelo-Reiner",
  //     title:"Vice President",
  //     bio: "Daniel joined the Steel Hawks his Sophomore year, during the 2015-2016 season (FRC Stronghold), quickly adapting his love for photography to the needs of the team. While his growing love for STEM moved him into working on the robot, he never abandoned taking photos. He loves the team and will be proud to take them to new heights as a Vice President.",
  //     pic: leader_image_dir + "dan.jpg"
  //   },
  //   {
  //     name:"Janki Patel",
  //     title:"Vice President",
  //     bio: "Janki joined the Steel Hawks in her freshman year, during the 2014-2015 season (FRC Recycle Rush). She quickly learned as much as she could about building an efficient robot, dedicating her afternoons and weekends to working and learning. Her growing knowledge made her an essential member of the pit crew every year. She hopes to bring the team to new heights as a Vice President.",
  //     pic: leader_image_dir + "janki.png"
  //   }
  // ]
  //
  // var slideshow = [
  //   { src:'ctn/img/gallery/2015/team.jpg',
  //     caption:"2015: Team picture at the SBPLI Regional after winning another GP award! 2-6-0-1! STEEL HAWKS!"
  //   },
  //   { src: 'ctn/img/gallery/2015/IMG_0102.JPG',
  //     caption:"2015: Prepping for our trip to St. Louis for the World Championships! The Steelhawks have no limits on achieving the best!"
  //   },
  //   { src: 'ctn/img/gallery/2014/slide1.png',
  //     caption: '2014: Waving the Steelhawks banner right into battle! (not quite sure where on Earth this is...)'
  //   },
  //   { src:'ctn/img/gallery/2013/header.jpg',
  //     caption: '2013: Our rebound rumble team, some of the Steelhawks that got us to where we are today!'
  //   },
  //   { src: 'ctn/img/gallery/2011/pic68.png',
  //     caption: '2011: The Gold Hawks, an all-girls THHS robotics team, formed before the Steelhawks was a coed team!'
  //   },
  //   { src: "ctn/img/gallery/2011/pic57.png",
  //     caption: '2011: The counterparts to the Gold Hawks, these were some of the Steelhawks from quite a while ago!'
  //   }
  // ];
  //
  // var leader_image_dir = "ctn/img/team/board/";
  // var leaders = [
  //   {
  //     name:"Phyllis Alinsao",
  //     title:"President",
  //     bio: "Phyllis joined the Steel Hawks in her freshman year, during the 2014-2015 season (FRC Recycle Rush). She soon developed a close friendship with Vice President Janki and the two dedicated hours of time to learning how to build the best drivetrain for any game. Her work didn't stop there, however, as she attended workshops and various programs to learn mechanics and CAD, and even plans on teaching a robotics course in the Philippines ine the summer of 2017. For these and many other reasons, she was easily elected as the president of the Steel Hawks.",
  //     pic: leader_image_dir + "phyllis.jpg"
  //   },
  //   {
  //     name:"Daniel Sotelo-Reiner",
  //     title:"Vice President",
  //     bio: "Daniel joined the Steel Hawks his Sophomore year, during the 2015-2016 season (FRC Stronghold), quickly adapting his love for photography to the needs of the team. While his growing love for STEM moved him into working on the robot, he never abandoned taking photos. He loves the team and will be proud to take them to new heights as a Vice President.",
  //     pic: leader_image_dir + "dan.jpg"
  //   },
  //   {
  //     name:"Janki Patel",
  //     title:"Vice President",
  //     bio: "Janki joined the Steel Hawks in her freshman year, during the 2014-2015 season (FRC Recycle Rush). She quickly learned as much as she could about building an efficient robot, dedicating her afternoons and weekends to working and learning. Her growing knowledge made her an essential member of the pit crew every year. She hopes to bring the team to new heights as a Vice President.",
  //     pic: leader_image_dir + "janki.png"
  //   }
  // ]



  // var init_slider = function(){
  //   $('.slider-all-controls').flexslider({
  //       slideshow: true,
  //       start: function(slider){
  //           if(slider.find('.slides li:first-child').find('.fs-vid-background video').length){
  //              slider.find('.slides li:first-child').find('.fs-vid-background video').get(0).play();
  //           }
  //       },
  //       after: function(slider){
  //           if(slider.find('.fs-vid-background video').length){
  //               if(slider.find('li:not(.flex-active-slide)').find('.fs-vid-background video').length){
  //                   slider.find('li:not(.flex-active-slide)').find('.fs-vid-background video').get(0).pause();
  //               }
  //               if(slider.find('.flex-active-slide').find('.fs-vid-background video').length){
  //                   slider.find('.flex-active-slide').find('.fs-vid-background video').get(0).play();
  //               }
  //           }
  //       }
  //   });
  // }



  Vue.component('page-team', {
      template: window.App.templates.pages.team,
      data: function(){
        return {
          // slideshow: slideshow,
          // leaders: leaders,
          groups: subteams
        }
      },
      mounted: function(){
          initializeMasonry();
          // init_slider();
      }
    });

    App.routes.push(
      { name: 'team', path: '/team', component: Vue.component('page-team') }
    );

});
