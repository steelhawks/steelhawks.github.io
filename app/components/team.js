$(function(){

  var subteams = [
    { name: 'Mechanical',
      icon: 'ti-settings',
      description: "We are the subteam responsible for designing and creating a machine set to accomplish a task based on the game that comes out each year. We design and prototype beta robots before moving to the final design. Once we have each element of the robot finalized, we're responsible for putting it together in the most efficient way possible. We have to keep in mind factors such as drop centers, turning radius, height, speed, weight.",
      members: "James Hopkins, Shane Werther, Carolina Narvaez, Courtney Chan, Adam Ganpat, Alex Muntean, Benjamin Zeller, Bob Fang, Danielle Chiu, David Muratov, Elsa Oreen, Esmond Lau, Heidy Mendez, Jackson DeMasi, Jasmine Fleming, Jeremy Aziel, Jessica Jimenez, Jocelyn Wang, Joshua Ashvil, Julie Li, Karan Ajmera, Krishna Baliga, Togay Atmaca, Adrian Hernandez, Alex Muntean, Annie Dong, Annie Lei, Bebe Adewale, Christian McKay, Daniel Cohen, David Y, Evan Chan, Jack, Jason Widjaja, Jeffrey Jun, Jessie Li, Jonathan Suero, Ketan Sukhu, Kevin Chen, Lucas Havens, Matthew Algenio, Nowyshin Mridula, Rachel Ly, Vishnupriya",
      ref: '#mechanicalinformation',
      aria: 'mechanicalinformation',
      tname: 'mechanicalinformation',
      mref: '#mechanicalmembers',
      maria: 'mechanicalmembers',
      mtname: 'mechanicalmembers',
    },
    {
      name: 'Electrical',
      icon: 'ti-pulse',
      description: 'Our subteam focuses on wiring circuits and creating the board for our robot. We also work with pneumatics, which involves the use of pressurized air to move mechanisms.',
      members: "Betty Jin, Eric Zhao, Keith Yeung, Minnie Lee, John Pabololat, Neeharika Kotimreddy, Shara Bhuiyan, Megan Chang, Harry Zhu, Joyce Ke, Olivia Leon, Pierre Marbid, Sharon Li",
      ref: '#electricalinformation',
      aria: 'electricalinformation',
      tname: 'electricalinformation',
      mref: '#electricalmembers',
      maria: 'electricalmembers',
      mtname: 'electricalmembers',
    },
    {
      name: '</> Programming',
      icon: '',
      description: "The Programming Sub-Team is the software side to the team. In programming, we develop the robot code for the autonomous (self-controlled) and teleoperated (driver controlled) periods of the game, vision for the robot so that it is able to detect specific game pieces and landmarks on the field (depending on the year's game), the Scout App which the scouters use to collect and process data, and the team website.",
      members: "Amar Maksumic, Shara Bhuiyan, Kelvin Yip, Hali Huang, Andy Hoo, Ethan Diep, Adeebah Zaman, Bryan Sukhdeo, Kaitlin Kaii, Amanda Grivej, Brian Hsu, Esther Liu, Harry Zhu, Jonathan Suero, Kevin Byun, Leo Zhang, Michael Kim, Nick Was, Sarah Kwong, Yuri Choi, Matthew Goldstein",
      ref: '#programminginformation',
      aria: 'programminginformation',
      tname: 'programminginformation',
      mref: '#programmingmembers',
      maria: 'programmingmembers',
      mtname: 'programmingmembers',
    },
    {
      name: 'Drive Team',
      icon: 'ti-car',
      description:"Potential drive team members will review the rules and learn different strategies in order to be well equipped for a match. We will learn the different parts of the robot and understand how they work with one another in order to provide feedback on the robots performance. On occasion, we will get to drive the robot. ",
      members: "Keith Yeung",
      ref: '#driveinformation',
      aria: 'driveinformation',
      tname: 'driveinformation',
      mref: '#drivemembers',
      maria: 'drivemembers',
      mtname: 'drivemembers',
    },
    {
      name: "Scouting",
      icon: 'ti-eye',
      description: "We focus on data collection and strategy which is then used during competition. We’ll teach you the ins and outs of last year's game and how to make strategies for it with the assistance of our app. ",
      members: "Michael Kim, Samantha Wong, Andy Hoo, Annabella Li, Sharon Li",
      ref: '#scoutinginformation',
      aria: 'scoutinginformation',
      tname: 'scoutinginformation',
      mref: '#scoutingmembers',
      maria: 'scoutingmembers',
      mtname: 'scoutingmembers',
    },
    {
      name: "Public Relations",
      icon: 'ti-face-smile',
      description:"Public Relations is the subteam that focuses on developing the brand of the team and making it marketable.\n\nWe will do outreach at public events, where we explain to any interested visitors about our team and what robotics entails. We will do outreach at school, where we will use the power of flyers, social media, and announcements to inform our peers about any robotics events. We will also  help the financial subteam with writing grants, as well as reach out to sponsors with thank-you letters, keeping them updated with the team as well as thanking them for their valuable contributions.",
      members: "Aarti Patel, Amrita Roy, Christopher Gilson, Clara Graceanu, Illan Matsuyoshi, Neeharika Kotimreddy, Raymond Z, Togay Atmaca",
      ref: '#prinformation',
      aria: 'prinformation',
      tname: 'prinformation',
      mref: '#prmembers',
      maria: 'prmembers',
      mtname: 'prmembers',
    },
    {
      name: "Finance",
      icon: 'ti-money',
      description: "The finance department focuses on fundraising which will help all aspects of robotics run at their full capacity.  Join our finance family which encompasses both humanities and STEM so get the best of both worlds when learning about marketing while improving your writing abilities! ",
      members: "Christopher Gilson",
      ref: '#financeinformation',
      aria: 'financeinformation',
      tname: 'financeinformation',
      mref: '#financemembers',
      maria: 'financemembers',
      mtname: 'financemembers',
    },
    {
      name: "Media",
      icon: 'ti-video-clapper',
      description: "In this subteam we document our team in an artistic way. We also work with the Public Relations subteam to chairmans to create the chairmans video. ",
      members: "Raymond Zhuo, Aarti Patel, Amrita Roy, Agathe Catechis",
      ref: '#mediainformation',
      aria: 'mediainformation',
      tname: 'mediainformation',
      mref: '#mediamembers',
      maria: 'mediamembers',
      mtname: 'mediamembers',
    },
    {
      name: 'CAD',
      icon: 'ti-ruler-pencil',
      description: "Our subteam makes dreams become reality. We make 3D models of mechanisms and prototypes. We also make parts to be 3D printed. We further aid the mechanical subteam with the prototyping process.",
      members: "Megan Chang, Jackson DeMasi, Agathe Catechis, Noah Stein",
      ref: '#cadinformation',
      aria: 'cadinformation',
      tname: 'cadinformation',
      mref: '#cadmembers',
      maria: 'cadmembers',
      mtname: 'cadmembers',
    },
    {
      name: "Animation",
      icon: 'ti-widget',
      description: "We use Blender, a 3D animation software, to create any animations the team needs. We model, texture, and animate different objects, including characters.",
      members: "Elizabeth Brandwein, Anjali Luckhoo, Agathe Cathechis, William Olsen",
      ref: '#animationinformation',
      aria: 'animationinformation',
      tname: 'animationinformation',
      mref: '#animationmembers',
      maria: 'animationmembers',
      mtname: 'animationmembers',
    },
    {
      name: "Safety",
      icon: 'ti-heart',
      description: "We ensure the safety of the team. We keep members safe whether they are in the lab working on the robot or not.",
      members: "Neeharika Kotimreddy, Minnie Lee",
      ref: '#safetyinformation',
      aria: 'safetyinformation',
      tname: 'safetyinformation',
      mref: '#safetymembers',
      maria: 'safetymembers',
      mtname: 'safetymembers',
    },
    {
      name: 'CNC',
      icon: 'ti-ruler-pencil',
      description: 'We are in charge of cutting parts for robot.',
      members: 'David Muratov',
      ref: '#cncinformation',
      aria: 'cncinformation',
      tname: 'cncinformation',
      mref: '#cncmembers',
      maria: 'cncmembers',
      mtname: 'cncmembers',
    }
  ];
    var brochure = [
      {
        name: '/ctn/img/brochurep1.png'
      },
      {
        name: '/ctn/img/brochurep2.png'
      },
    ];
  
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
            groups: subteams,
            brochure: brochure
          }
        },
        mounted: function(){
            initializeMasonry();
            // init_slider();
  
            $('.tabbed-content').each(function() {
                $(this).append('<ul class="content"></ul>');
            });
  
            $('.tabs li').each(function() {
                var originalTab = $(this),
                    activeClass = "";
                if (originalTab.is('.tabs>li:first-child')) {
                    activeClass = ' class="active"';
                }
                var tabContent = originalTab.find('.tab-content').detach().wrap('<li' + activeClass + '></li>').parent();
                originalTab.closest('.tabbed-content').find('.content').append(tabContent);
            });
  
            $('.tabs li').click(function() {
                $(this).closest('.tabs').find('li').removeClass('active');
                $(this).addClass('active');
                var liIndex = $(this).index() + 1;
                $(this).closest('.tabbed-content').find('.content>li').removeClass('active');
                $(this).closest('.tabbed-content').find('.content>li:nth-of-type(' + liIndex + ')').addClass('active');
            });
        }
      });
  
      App.routes.push(
        { name: 'team', path: '/team', component: Vue.component('page-team') }
      );
  })