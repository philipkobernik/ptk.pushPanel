
/*
  convert grid coords into midi note number
*/

// global varables and code
inlets = 1;
outlets = 1;

function list()
{
	var a = arrayfromargs(arguments);
	outlet(0, (a[1]*8)+a[0]+36);
}