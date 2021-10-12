// calling the canvas 

var canvas = document.getElementById("drawCanvas");
var draw = canvas.getContext("2d");
var userInput = document.getElementById("input");

 // Gets random colours for the background shapes and generates lighter colours (128 colours) 
function getShapeColor()
{
	 var r = Math.floor((Math.random()*128)+128);
	 var g = Math.floor((Math.random()*128)+128);
	 var b = Math.floor((Math.random()*128)+128);
	 return 'rgb(' + r + ',' + g + ',' + b + ')'; // this returns/displays the colours to the canvas using rgb colours
}
 // Gets colours for the fonts and generates darker colours by adding 1 to the random color generated 
function getFontColor()
{
 var r = Math.floor((Math.random()*128)+1);
	 var g = Math.floor((Math.random()*128)+1);
	 var b = Math.floor((Math.random()*128)+1);
	 return 'rgb(' + r + ',' + g + ',' + b + ')';  // this returns/displays the colours to the canvas using rgb colours

}
// Get a random number between the two values(min, max)
function getSize(min, max)
{
	return Math.floor(Math.random()*(max - min) + min);
}

// Pick a random font from the fonts that are listed below
function getFont()
{
	var r = Math.floor(Math.random()*13);
	switch(r)
	{
		case 0:
			return 'Amatic SC';
        case 1:
			return 'Overlock';
        case 2:
			return 'Reenie Beanie';
        case 3:
			return 'Fredericka the Great';
        case 4:
			return 'Major Mono Display';
        case 5:
			return 'Charm';
        case 6:
			return 'Indie Flower';
        case 7:
			return 'Cinzel';
        case 8:
			return 'Arial';
        case 9:
			return 'Times';
        case 10:
			return 'Trebuchet MS';
        case 11:
			return 'Impact';
        case 12:
			return 'Comic Sans MS';
	}
}
function ransomize()
{
  draw.clearRect(0,0, canvas.width, canvas.height);
	//assign the user input value
	var inputString = userInput.value;
	//assign the value of the starting distance x and Y
	var startX = 20;
  var startY = 70;
	// Genarate both squares and text for each letter of the user input
	for (var i = 0; i < inputString.length; i++)
	{
		// Apply the min and max size of the fonts
		var letterSize = getSize(20, 61);
		// To remove the square and replace it with a blank space when the user types a sentence with a space in it
		if (inputString[i] != " ")
		{
			draw.fillStyle = getShapeColor();
			draw.fillRect(startX - letterSize / 4, startY - 3* letterSize / 4, letterSize, letterSize);
		}

		// Draw the text 
    draw.fillStyle = getFontColor();  // colour the font with the randomized colour function created before getFontColor()
    draw.font = letterSize +  "px " + getFont(); //draw the font with the randomized 'letterSize' range in px and get the randomized font 'getFont' function
    draw.fillText(inputString[i], startX, startY);  //draw all the letters that was written into the Input section in the startX and Y position.

		// This creates space between each letter which is added from the startX position
		startX += letterSize + 10;
    // check if the text is out of the canvas 
    if(startX + letterSize>= canvas.width )
		{
        startX=20;
        startY+=70;
    }
	}
}
