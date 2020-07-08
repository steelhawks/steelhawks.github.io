$(function(){

  //hyperlink for the mentors folder
  var mentorHL = '/ctn/img/mentors/';
  //hyperlink for a generic profile picture
  var genericPicture  = "/ctn/img/genericProfile.jpg"
  /*information pertaining to all mentors
   *pictures are needed for: Ms. Brustein, Mr. Tsai, Kevin, Kenneth, and Jack
   */
  var mentors = [
    {
      name: 'Joel Heitman',
      title: 'Head Coach',
      bio: 'Mr. Heitman is the Head Coach of the Steel Hawks. He joined the Steel Hawks in 2013. His passion for Robotics has allowed the team to soar, and he hopes that with the help of his mentors, he can inspire the next generation of innovators.',
      pic: mentorHL + "heitman.JPG"
    },
    {
      name: 'Susan Brustein',
      title: 'Coach',
      bio: 'Ms. Brustein is a Coach for the Steel Hawks. She was one of the founding coaches in 2008. Ms. Brustein is the Assistant Principal of Math, Science, and Technology at our school. She is currently the mentor of our Public Relations subteam.',
      pic: genericPicture
    },
    {
      name: 'Joshua Raghunath',
      title: 'Coach',
      bio: 'Mr. Raghunath is a Coach for the Steel Hawks. He joined the Steel Hawks in September of 2014. As an AP Physics teacher, he helps team members apply what they learn in his class to build the most efficient robot. His background in finance helps team members learn how to develop the Steel Hawks brand and represent the team professionally.',
      pic: mentorHL + 'mrR.JPG'
    },
    {
      name: 'David Stern',
      title: 'Coach',
      bio: 'Mr. Stern is a Coach for the Steel Hawks. He joined the Steel Hawks in September of 2016. As a Regents Physics teacher, he helps team members apply what they learn in class to their robot designs.',
      pic: mentorHL + "stern.JPG"
    },
    {
      name: 'John Tsai',
      title: 'Coach',
      bio: 'Mr. Tsai is a coach for the Steel Hawks.',
      pic: genericPicture
    },
    {
      name: 'Olan-Ray Frith',
      title: 'Mentor',
      bio: 'Olan is the fabrication mentor for the Steel Hawks. He guides us through the prototyping, designing, and building processes.',
      pic: mentorHL + "olan.JPG"
    },
    {
      name: 'Weijian Zeng',
      title: 'Mentor',
      bio: 'Weijian is the programming mentor for the Steel Hawks. We are grateful for his work in helping aspiring software engineers develop clean, well-written code for the team.',
      pic: mentorHL + "weijian.JPG"
    },
    {
      name: 'Kevin Goetzger',
      title: 'Mentor',
      bio: 'Kevin is a mentor for the Steel Hawks. We are grateful for his work in creating the practice field that we use for Open Field Weekend.',
      pic: genericPicture
    },
    {
      name: 'Kenneth Leuci',
      title: 'Mentor',
      bio: 'Ken is a mentor for the Steel Hawks. We are grateful for his work in creating the practice field that we use for Open Field Weekend.',
      pic: genericPicture
    },
    {
      name: 'Jack Gold',
      title: 'Mentor',
      bio: 'Jack is a mentor for the Steel Hawks.',
      pic: genericPicture
    }
    // {
    //   name: 'Raj Rao',
    //   title: 'Mentor',
    //   bio: 'Raj is a mentor for the Steel Hawks.',
    //   pic: genericPicture
    // },
    // {
    //   name: 'Marcus Barbu',
    //   title: 'Mentor',
    //   bio: 'Marcus Barbus is a graduate of the Class of 2016, and was formerly the President of the Steel Hawks. He currently mentors the programming subteam.',
    //   pic: genericPicture
    // },
    // {
    //   name: 'Ishabul Haque',
    //   title: 'Mentor',
    //   bio: 'Ishabul is a mentor for the Steel Hawks.',
    //   pic: mentorHL + 'ishabul.JPG'
    // },
    // {
    //   name: 'Alexander Burzynski',
    //   title: 'Mentor',
    //   bio: 'Alexander is a mentor for the Steel Hawks.',
    //   pic: genericPicture
    // }
  ];

  Vue.component('page-mentors', {
      template: window.App.templates.pages.mentors,
      data: function(){
        return {
          mentors: mentors
        }
      },
      mounted: function(){
        initializeMasonry();
      }
    });

    App.routes.push(
      { name: 'mentors', path: '/mentors', component: Vue.component('page-mentors') }
    );

});
