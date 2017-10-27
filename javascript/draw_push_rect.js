inlets = 1;
outlets = 1;

function list()
{
	var a = arrayfromargs(arguments);
	var width = a[0];
	var height = a[1];
	var offsetX = a[2];
	var offsetY = a[3];
	for (var x = offsetX; x < width+offsetX; x++) {
		for (var y = offsetY; y < height+offsetY; y++) {
			outlet(0, x, y);
		}
	}
}