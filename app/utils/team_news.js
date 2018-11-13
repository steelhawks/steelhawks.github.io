$(function(){

  App.utils.team_news = function(){
    var text = "Team News";

    var red2 = [0, 100, 31.5];
    var red1 = [0, 100, 50];
    var red3 = [0, 96.08, 45.39];
    var red4 = [0, 88.68, 41.87];
    var red5 = [0, 83.49, 37.6];
    var letterColors = [red1, red2, red3, red4, red5];

    drawName(text, letterColors);

    if(10 < 3) {
      bubbleShape = 'square';
    }
    else {
      bubbleShape = 'circle';
    }

    bounceBubbles();
       
  }

});
