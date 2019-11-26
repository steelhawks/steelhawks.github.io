$(function(){

  var outreach = [
  {
    mainFocus: 'Out FIRST',
    smallFous: 'Project Philippines',
    img: '/ctn/img/outreach/PP.jpeg',
    description1: "In the summer of 2017, one of our teammates, Phyllis Alinsao, traveled to Iloilo, Philippines to host hands-on engineering workshops; we called this program Project Philippines! Our team supported Phyllis by donating over $4,500 of materials, including tools and a chassis so that the students could receive a hands-on engineering experience. We also worked with Phyllis to create the curriculum for the four-week workshops.",
    description2: "After Phyllis returned, she told us that Iloilo and surrounding neighborhoods had no libraries; In response, we held a schoolwide book drive for these students and others across the three regions of the Philippines: Mindanao, Luzon, and the Western Visayas."
  },
  {
    mainFocus: 'Out FIRST',
    smallFocus: 'FIRST Relations',
    img: '/ctn/img/outreach/FIRSTRelations.png',
    description1: 'Our former Vice President, Daniel Sotelo-Reiner, had a vision which came to fruition in 2017. He was inspired by our team\'s inclusivity to create a film to embody what we stand for. “FIRST® Relations” is the result of his efforts. His film debuted at the Tribeca Film Festival in 2018.',
    description2: 'Daniel wrote, produced, and edited "FIRST® Relations" with the help of 30 members from our teams. His passion for our team and for filmmaking introduced the film community to FIRST. The main character in his film is a member of the LGBTQ+ community and the entire cast is ethnically diverse. His film emphasizes our team’s belief that FIRST and the STEM fields as a whole are open to everyone, regardless of economic status, religion, race, or sexual orientation.'
  },
  {
    mainFocus: 'In FIRST',
    smallFocus: 'Open Field',
    img: '/ctn/img/outreach/OpenField1.jpeg',
    description1: 'Over the years, we’ve made it a priority to reach out to any and all teams that need help, whether it be in the form of mentorship or building space. Annually over the past five years we’ve created a full-scale replica of the game field and invite all FRC teams in the tri-state area to visit and practice alongside each other in the last weekend of the build season. Our build space is open to teams at any time throughout the Build Season, and we’ve helped many local FRC teams (5599, 3017, 6423, etc.) as well as international FRC teams (1156, 1382, and 1690).',
  },
  {
    mainFocus: 'In FIRST',
    smallFocus: 'Hawk Talks',
    img: '/ctn/img/outreach/hawkTalks2017.JPG',
    description1: 'We welcome neighboring teams to our annual robotics presentations, which we call our Hawk Talks, where we present information on a myriad of topics ranging from engineering to Public Relations',
  },

  {
    mainFocus: 'In FIRST',
    smallFocus: 'FTC Championships',
    img: '/ctn/img/outreach/ftc.jpeg',
    description1: "Since 2015, we’ve hosted the NYC FTC Championships at our school, and all of our members and their parents get involved and volunteer at the event as referees and judges. We’ve also livestreamed this event via Twitch so that everyone has access to the FIRST experience.",
  },
  {
    mainFocus: 'In FIRST',
    smallFocus: 'FLL',
    img: '/ctn/img/outreach/WF.png',
    description1: "In 2015, we started the tradition of visiting William Floyd Elementary School in Shirley, Long Island. Here, we sparked the students interest in robotics and the STEM community by letting the students operate and drive our robot so they can gain a hands-on experience. We also give presentations detailing the valuable skills and capabilities FIRST can foster in them. The students of William Floyd went on to start Team 23094 and sparked interest within their school district, who later founded the start of seven other FIRST Lego League (FLL) teams.",
  }
  ];



  Vue.component('page-outreach', {
      template: window.App.templates.pages.outreach,
      data: function(){
        return {
          events:outreach
        }
      },
      mounted: function(){
      }
    });

    App.routes.push(
      { name: 'outreach', path: '/outreach', component: Vue.component('page-outreach') }
    );

});
