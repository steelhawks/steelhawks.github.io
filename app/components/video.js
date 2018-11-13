$(function(){

    Vue.component('main', {
      template: get_template()
    });

    App.routes.push(
      { path: '/', component: Vue.component('main') }
    );


    function get_template(){
        return `

      <div>

        <div class="video-overlay" id="vid_overlay" style="color: #fff; background-color: #fff;">
      		<video width="100%" height="100%" id="video"  loop >
      			<source src="ctn/video/banner17.mp4" type="video/mp4">
      			<source src="ctn/video/banner17.webm" type="video/webm">
      			Your browser does not support the video tag.
      		</video>
      	</div>

      	<span id="roll" class="roll"></span>

          <section id="aboutUsContainer" class="background">
              <div id="aboutUs" class="content padded">
          	    <div id="aboutUsText">
          	    	<h1 id="aboutUsTitle"><a href="ctn/about_team.php">About Us</a></h1>
          	    	<p id="aboutUsDescription">Team 2601 is Townsend Harris High School's FIRST Robotics team. Located in Flushing, NY, the Steel Hawks compete annually in the FIRST Robotics Competition (FRC) after spending six weeks designing, building and programming a robot to compete and perform assigned tasks in the form of a game. Before and during those six weeks, our team works to raise funds, gain business partners and sponsors, and share our knowledge of science with our community.</p>
          	    </div>
      	    	<div>
              		<a href="ctn/about_team.php"><img src="ctn/img/logo.png" id="logo" class="spin" height="230px"></a>
                  </div>
              </div>
          </section>

          <section id="aboutFirstContainer" class="background dark">
      	    <div id="aboutFirst" class="content padded">
        		  <div>
      			     <a href="http://www.firstinspires.org/"><img src="ctn/img/home_page/first-vertical-reverse.png" class="bigimg" height="350px"></a>
    	    	  </div>
      		    <div id="aboutFirstText">
      		    	<h1 id="aboutFirstTitle"><a href="http://www.firstinspires.org/">About FIRST</a></h1>
      		    	<p id="aboutFirstDescription"> FIRST is a non-profit organization founded by inventor Dean Kamen. The aim of FIRST, an abbreviation for "For Inspiration and Recognition of Science and Technology," is to spread Science, Technology, Engineering, and Math to all corners of the globe, and get students from all over the world involved. FIRST hopes to be able...<br /><br />"To transform our culture by creating a world where science and technology are celebrated and where young people dream of becoming science and technology leaders." -Dean Kamen, Founder </p>
      		    </div>
          </section>

          <section id="newsContainer" class="background">
          	<div class="content">
                  <div  id="news" class="padded">
              	    <h1 id="newsHead">Team News</h1>
                          <br/>
      		    			<h3>St. Louis 2017 Championships!</h3>
      						<p>Because of our HVR win, we went to St. Louis to compete as 1 of 68 teams in the Carson division (it's always the hardest). We finished the Steamworks official season as 59th in our division. </p>
      						<p><a href="https://www.thebluealliance.com/event/2017cars" target="_blank">>> Check out the Carson results!</a></p>
      					<br/>
      		    			<h3>Hudson Valley Regionals!</h3>
      						<p>WE WON THE FIRST EVER HUDSON VALLEY REGIONAL COMPETITION AS THE 8TH SEEDED ALLIANCE on Friday, March 24, 2017 – Sunday, March 26, 2017! Come watch us compete! </p>
      						<p><a href="https://www.thebluealliance.com/event/2017nysu" target="_blank">>> Check out the HVR results!</a></p>
      					<br />
      		    			<h3>Long Island Regionals!</h3>
      						<p>We recently participated in the Long Island Regional Competition hosted at Hofstra University’s David S. Mack Sports and Exhibition Complex on Friday, March 31 and Saturday, April 1! We finished our weekend as semifinalists! </p>
      						<p><a href="https://www.thebluealliance.com/event/2017nyli" target="_blank">>> Check out the SBPLI results!</a></p>
      					<br />
      					<h3>Support our Edco Fundraiser!</h3>
      						<p>Our team has an Edco fundraising project, which we hope to be a major source of next season's funds. Please feel free to contribute any amount - even $1 is great! Help us to build better robots and support our team for another great season! Thank you! </p>
      						<p><a href="https://thhs.ed.co/steel-hawks" target="_blank">>> Help fund another season!</a></p>
      					<br />
      					<!--<h3>Half Hollow Hills</h3>
      						<p>Our last Stronghold off-season competition happened on November 19<sup>th</sup>!</p>
      						<p>The Half Hollow Hills invitational, at HHH High School, hosted by team 3624, took plae on November 19<sup>th</sup>! Red Tail performed better than ever for its last Stronghold run! We ranked 6<sup>th</sup>, our best this season, and we're only going up from here! </p>
      						<p><a href="http://www.team3624.org/invitational.html" target="_blank">>> More info here!</a></p>
      					<br />-->
      					<!--<h3>Brunswick Eruption 15</h3>
              				<p>We went to our second off-season competition - Brunswick Eruption 14 hosted by Team 25, Raider Robotics, at the beginning of last year's season. </p>
                         		<p>Brunswick Eruption 15, same location, hosted by the same team, took place this November 12<sup>th</sup>! Red Tail performed spectacularly once again for its second-to-last Stronghold run! </p>
      						<p><a href="http://be.raiderrobotix.org/" target="_blank">>> More info here!</a></p>
      					<br />-->
      					<!--<h3>The Steel Hawks went to St. Louis in 2015!</h3>
                              <p> At the NYC Regional FRC competition in 2015, Team 2601 won the Engineering Inspiration Award for their outstanding involvement in the community to inspire others into exploring STEM. This award allowed them a spot in the World Championships at St. Louis! </p>
                              <p><a href="https://www.thebluealliance.com/team/2601/2016#event-results" target="_blank"> Find out more about our accomplishment here! </a> </p>
                          <br/>-->
                          <!--<h3>Steel Hawks and Chappie</h3>
                              <p> The Steel Hawks appeared in an exclusive interview with General Electric on Robots and the upcoming movie, "Chappie". Coach Joel Heitman, previous vice president Neil Chen, and senior Marcus Barbu gave their take on robotics in the video. </p>
                              <p><a href="http://youtu.be/M-9Efp4EVVE" target="_blank"> Check out the video here! </a> </p>
                          <br/>-->
                          <h3>Steel Hawks Workshops</h3>
      						<p>We hosted a robotics workshop a while back. This workshop consisted of presentations featuring: safety, drivetrain design, and drivetrain programming. Conatact and donate if you want us to plan more! </p>
      						<p><a href="https://docs.google.com/presentation/d/13oqWLZLlubNFonj-PrvP4QRheKOP7FtSNZpQA-ydy_Q/edit?pli=1#slide=id.p19" target="_blank">>> See Safety Advice presentation here!</a></p>
      						<p><a href="https://docs.google.com/presentation/d/1BjSlhjJm8KlXacNczmfdmSd_jWpvCkwxFaylbJ14gVo/edit?pli=1#slide=id.p" target="_blank">>> See Drivetrain Design presentation here!</a></p>
      						<p><a href="https://docs.google.com/presentation/d/1ygWXBkME95pznblV8GJ-gIriOol7N0g61gqxEVUmsvo/edit?pli=1#slide=id.g4dbe22eb3_00" target="_blank">>> See Programming presentation here!</a></p>
                          <br />
      	   </div>
                  <div id="buildBlog" class="padded">
                      <h4>2018 Build Blog</h4>
                      <table style="width:100%">
                          <tr><td><p><a>Pre-Season [WIP]</a></p></td></tr>
                          <tr><td><p><a>Kickoff [WIP]</a></p></td></tr>
                          <tr><td><p><a>Week 3 [WIP]</a></p></td></tr>
                          <tr><td><p><a>Week 6 [WIP]</a></p></td></tr>
                          <tr><td><p><a>Competition [WIP]</a></p></td></tr>
                          <tr><td><p><a>Post-Season [WIP]</a></p></td></tr>
                      </table>
                  </div>
          	</div>
          </section>
                  <!-- Area with images of our sponsors, links to sponsors' info -->
          <section id="teamSponsorsContainer" class="content">
              <div id="teamSponsorsText">

              	 <h1 id="sponsors"><a href="ctn/sponsors.php">Sponsors</a></h1>
          		   <p>The Steel Hawks thanks all of the following people, companies and organizations for their continuing support of our team and school!</p>
              </div>
              <div id="teamSponsors" class="sps">
          	    <a href="http://www.magellan.aero/" target="_blank">
          		    <img src="ctn/img/sponsors/magellan1.png" style="width:49.3%; left:160px; top:0;" draggable="false" />
          	    </a>
          	    <a href="http://www.github.com/" target="_blank">
          		    <img src="ctn/img/sponsors/Octocat.png" style="width:26%; right:0; top:0px" draggable="false" />
          	    </a>
          	    <a href="http://www.homedepot.com/" target="_blank">
          		    <img src="ctn/img/sponsors/home_depot.png" style="width:18.5%; height: 23.5%; left: 235px; top:133px;" draggable="false" />
          	    </a>
          		<a href="https://www.coned.com/" target="_blank">
          		    <img src="ctn/img/sponsors/conEdison.png" style="width:25%; height: 23.5%; bottom: 0; left: 0" draggable="false" />
          	    </a>
          	    <a href="http://www.solidworks.com/" target="_blank">
          		    <img src="ctn/img/sponsors/solidworks2.png" style="width:36%; top:357px; right: 295px; padding: 34px 15px;" draggable="false" />
          	    </a>
          		<a href="http://www.applebees.com/" target="_blank">
          		    <img id="abs" src="ctn/img/sponsors/applebees.png" style="width:18.5%; height: 23.5%; top:134px; left: 455px" draggable="false" />
          	    </a>
          	    <a href="http://www.qc.cuny.edu/" target="_blank">
          		    <img src="ctn/img/sponsors/qc.png" style="width: 35.5%; height: 120px; bottom: 0; right: 295px; padding-left: 17.5px; padding-right: 17.5px;" draggable="false" />
          	    </a>
          	    <a href="http://www.harrisonmu.org/" target="_blank">
          		    <img src="ctn/img/sponsors/mu.jpg" style="height: 23.5%; width:20%; left:0; top:134px" draggable="false" />
          	    </a>
          		<a href="https://www.rushordertees.com/" target="_blank">
          		    <img src="ctn/img/sponsors/ROT.png" style="width:12%; height: 12.3%; left:0px" draggable="false" />
          	    </a>
          	    <a href="http://www.thhs.qc.edu/" target="_blank">
          		    <img src="ctn/img/sponsors/thhs.png" style="width:26%; height: 38%; top: 430px; right:0; bottom:0" draggable="false"/>
          	    </a>
          	    <a href="http://www.baesystems.com/" target="_blank">
          		    <img src="ctn/img/sponsors/bae.jpg" style="width:26%; height: 18%; right:0; top:252px;" draggable="false"/>
          	    </a>
          	    <a href="http://shopbottools.com/" target="_blank">
          		    <img src="ctn/img/sponsors/shopbot.jpg" style="width:25%; height: 17.7%; left:0; top:357px;" draggable="false"/>
          	    </a>
      	</div>
      </section>
          <footer>
      		<!-- Place footer content here! -->
          </footer>
        </div>
    `;
  }
});
