
/*
  convert midi note number to x/y grid w/ velocity. (0,0) is lower left corner.
*/

// global varables and code
inlets = 1;
outlets = 1;

function list()
{
    listArray = arrayfromargs(arguments);
	var pitch = listArray[0];
	var velocity = listArray[1];
	var y = Math.floor((pitch-36) / 8);
	var x = (pitch-36) % 8;
	outlet(0, [x, y, velocity]);
}
