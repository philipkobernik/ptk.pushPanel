
/*
  convert global grid coord to relative grid and index
*/

// global varables and code
inlets = 2;
outlets = 3;

var width = 0;
var height = 0;
var offsetX = 0;
var offsetY = 0;

function withinPanel(coordArray) {
	var withinX = coordArray[0] >= offsetX && coordArray[0] <= offsetX+width-1;
	var withinY = coordArray[1] >= offsetY && coordArray[1] <= offsetY+height-1;
	return (withinX && withinY);
}
function handleCoord(coordArray) {
	if(withinPanel(coordArray)) {
		// post("within: " + width + ' ' + height + ' ' + offsetX + ' ' + offsetY);
		var relativeX = coordArray[0]-offsetX;
		var relativeY = coordArray[1]-offsetY;
		var velocity = coordArray[2];
		outlet(1, relativeX, relativeY, velocity);
		outlet(0, (relativeY*width)+relativeX, velocity);
		outlet(2, (coordArray[1]*8)+coordArray[0]+36, velocity);

	} else {
		// post("not within: " + width + ' ' + height + ' ' + offsetX + ' ' + offsetY);
	}
}

function handleSetup(sizeOffsetArray) {
	width = sizeOffsetArray[0];
	height = sizeOffsetArray[1];
	offsetX = sizeOffsetArray[2];
	offsetY = sizeOffsetArray[3];
}

function list()
{
    listArray = arrayfromargs(arguments);
	if(inlet == 0) {
		handleCoord(listArray)
	} else {
		handleSetup(listArray)
	}
}
