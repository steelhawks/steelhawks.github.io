$(function(){

  Vue.component('website-header', {
    props: ['title'],
    template:
    `<section class="img-bg text-center">
      <h1 style="color:white;margin-bottom:-6vh;"><b>{{title}}</b></h1>
     </section>`
  })

});
