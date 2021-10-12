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
