function start() {
  var  canvas = document.getElementById("drawCanvas");
  var  draw = canvas.getContext("2d");
  var img = document.getElementsByClassName("text");
  var x = 10;
  var y = 25;

  for  (var i = 0; i < img.length; i++)
  {
    // If this is a new word reset its X and increment Y to reflect the new drawing position
    if (i % 4 == 0 && i < img.length - 1)
    {
      x = 10;
      y += 125;
    }
    else
    {
      //  Still the same word, move X to draw the next letter
      x +=90;
    }
    draw.drawImage(img[i], x, y, 100, 100);
  }
}

/*

var canvas = document.getElementById("drawCanvas");
var draw = canvas.getContext("2d");
// By Christina Kappalumakkel
var live = document.getElementsByClassName('live');
// By Silvia Pex
var love = document.getElementsByClassName('love');
// By Asimina Kazakou
var laugh = document.getElementsByClassName('laugh');
function start() {
  liveText();
  loveText();
  laughText();
}
// By Christina Kappalumakkel
function liveText()
{
  x = 10;
  for (var a of live)
  {
    draw.drawImage(a, x, 25,100, 100);
    x += 90;
  }
}
// By Silvia Pex
function loveText()
{
  x = 10;
  for (var b of love)
  {
    draw.drawImage(b, x, 150,100, 100);
    x += 90;
  }
}
// By Asimina Kazakou
function laughText()
{
  var x = 10;
  for (var c of laugh)
  {
    draw.drawImage(c, x, 275,100, 100);
    x += 90;
  }

}


*/