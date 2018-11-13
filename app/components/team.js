
$(function(){

  var slideshow = [
    { src:'ctn/img/gallery/2015/team.jpg',
      caption:"2015: Team picture at the SBPLI Regional after winning another GP award! 2-6-0-1! STEEL HAWKS!"
    },
    { src: 'ctn/img/gallery/2015/IMG_0102.JPG',
      caption:"2015: Prepping for our trip to St. Louis for the World Championships! The Steelhawks have no limits on achieving the best!"
    },
    { src: 'ctn/img/gallery/2014/slide1.png',
      caption: '2014: Waving the Steelhawks banner right into battle! (not quite sure where on Earth this is...)'
    },
    { src:'ctn/img/gallery/2013/header.jpg',
      caption: '2013: Our rebound rumble team, some of the Steelhawks that got us to where we are today!'
    },
    { src: 'ctn/img/gallery/2011/pic68.png',
      caption: '2011: The Gold Hawks, an all-girls THHS robotics team, formed before the Steelhawks was a coed team!'
    },
    { src: "ctn/img/gallery/2011/pic57.png",
      caption: '2011: The counterparts to the Gold Hawks, these were some of the Steelhawks from quite a while ago!'
    }
  ];

  var leader_image_dir = "ctn/img/team/board/";
  var leaders = [
    {
      name:"Phyllis Alinsao",
      title:"President",
      bio: "Phyllis joined the Steel Hawks in her freshman year, during the 2014-2015 season (FRC Recycle Rush). She soon developed a close friendship with Vice President Janki and the two dedicated hours of time to learning how to build the best drivetrain for any game. Her work didn't stop there, however, as she attended workshops and various programs to learn mechanics and CAD, and even plans on teaching a robotics course in the Philippines ine the summer of 2017. For these and many other reasons, she was easily elected as the president of the Steel Hawks.",
      pic: leader_image_dir + "phyllis.jpg"
    },
    {
      name:"Daniel Sotelo-Reiner",
      title:"Vice President",
      bio: "Daniel joined the Steel Hawks his Sophomore year, during the 2015-2016 season (FRC Stronghold), quickly adapting his love for photography to the needs of the team. While his growing love for STEM moved him into working on the robot, he never abandoned taking photos. He loves the team and will be proud to take them to new heights as a Vice President.",
      pic: leader_image_dir + "dan.jpg"
    },
    {
      name:"Janki Patel",
      title:"Vice President",
      bio: "Janki joined the Steel Hawks in her freshman year, during the 2014-2015 season (FRC Recycle Rush). She quickly learned as much as she could about building an efficient robot, dedicating her afternoons and weekends to working and learning. Her growing knowledge made her an essential member of the pit crew every year. She hopes to bring the team to new heights as a Vice President.",
      pic: leader_image_dir + "janki.png"
    }
  ]


  var init_slider = function(){
    $('.slider-all-controls').flexslider({
        slideshow: true,
        start: function(slider){
            if(slider.find('.slides li:first-child').find('.fs-vid-background video').length){
               slider.find('.slides li:first-child').find('.fs-vid-background video').get(0).play();
            }
        },
        after: function(slider){
            if(slider.find('.fs-vid-background video').length){
                if(slider.find('li:not(.flex-active-slide)').find('.fs-vid-background video').length){
                    slider.find('li:not(.flex-active-slide)').find('.fs-vid-background video').get(0).pause();
                }
                if(slider.find('.flex-active-slide').find('.fs-vid-background video').length){
                    slider.find('.flex-active-slide').find('.fs-vid-background video').get(0).play();
                }
            }
        }
    });
  }

  Vue.component('page-team', {
      template: window.App.templates.pages.team,
      data: function(){
        return {
          slideshow: slideshow,
          leaders: leaders
        }
      },
      mounted: function(){
          init_slider();
      }
    });

    App.routes.push(
      { name: 'team', path: '/team', component: Vue.component('page-team') }
    );

});
