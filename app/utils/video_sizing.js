$(function(){

  App.utils.video_sizing = function() {
    //var pButton = $('#pButton');
    var roll = $('#roll');
    var overlay = $('#overlay');
    var vHeight = $('#video').height()/2;/* + $('#navbar').height()/2;*/
    var video_height = $('#video').height();
    var nav_height = $('#navbar').height();

    console.log('Video height is ' + vHeight);

    roll.css({height: video_height + "px"});
    roll.css({top: nav_height + "px"});
    overlay.css({top: vHeight + "px"});
    //var rHeight = (($("#roll").height())/2);
    var rHeight = ((video_height/2) + (nav_height/2));
    //pButton.css({top: rHeight + "px"});
  }

  var change_video_opacity = function(){
    let w_height = $('div#vid_overlay').height() + $('#navbar').height();
    let v_height = ($('div#vid_overlay').height() + $('#navbar').height()) - $(window).scrollTop();
    $('div#vid_overlay').css({'opacity': v_height / w_height });
  }

  // $(window).scroll(change_video_opacity);

});
