
/*
  all notes off
*/

// global varables and code
inlets = 1;
outlets = 1;

function msg_int(velocity)
{
	for (var padIndex = 0; padIndex < 64; padIndex++) {
		outlet(0, padIndex+36, velocity);
	}
}