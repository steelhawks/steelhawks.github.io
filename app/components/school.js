var brochure = [
  {
    name: '/ctn/img/brochurep1.png'
  },
  {
    name: '/ctn/img/brochurep2.png'
  },
];

$(function(){

    Vue.component('page-school', {
      template: get_template(),
      data: function(){
        return {
        }
      }
    });

    App.routes.push(
      { name: 'school', path: '/school', component: Vue.component('page-school') }
    );

    function get_template(){
        return `
        <div class="main-container">
          <website-header title="Townsend Harris High School" class="bg-black maroon-border"></website-header>
          <section class="pt32 pb32 maroon-border">
                <div class="col-md-offset-2 col-md-8 col-sm-12 pb32">
                  <center><img alt="Screenshot" class="cast-shadow mb-xs-24" src="ctn/img/thhs_building2.jpg" style="border-rounded"></center>
                </div>
                <div class="col-md-offset-2 col-md-8 col-sm-12">
                    <p class="lead text-justify">
                        Townsend Harris is a young school with an honored past.
                      In 1848, the New York Free Academy, our first municipal institution of free higher education,
                      was established by the Board of Education due largely to the effort of Townsend Harris who was,
                      at the time, the president of the Board. The Free Academy later became the City College of New York.
                      The "introductory year" of the Free Academy grew into Townsend Harris High School which flourished
                      until 1942 when it was closed by Mayor LaGuardia because of budgetary constraints.
                      <br/>
                      <br/>
                      In 1984, Townsend Harris was reopened with a new location of Flushing, NY
                      and student body but the same spirit and desires as before.
                      Since that time Townsend Harris has provided a rigorous curriculum with
                      an emphasis on the humanities and classics, bolstered by mathematics, science,
                      and the integration of modern technology. In order to prepare the students for
                      ethical and intellectual challenges, the instructional program promotes respect
                      for people and ideas, critical and creative thinking, and precision of language.
                      The community encourages the students to strive for excellence, to make sensible
                      decisions, and to develop an enduring commitment to serving the community.
                    </p>
                </div>
                <div class="col-md-offset-2 col-md-8 col-sm-12 pb32">
                  <center>
                    <img alt="Screenshot" class="cast-shadow mb-xs-24" src="/ctn/img/brochurep1.png" style="border-rounded">
                    <img alt="Screenshot" class="cast-shadow mb-xs-24" src="/ctn/img/brochurep2.png" style="border-rounded">
                  </center>
                </div>
                <!--end of container-->
            </section>

        </div>
    `;
  }
});
