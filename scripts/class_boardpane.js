// BoardPane is a vertical slide of the game area, 4 instances,
// instances not directly affected by each other

function BoardPane() {
	"use strict";
	/*
		Each lane has 24 positions
		Each position contains 0 - 5 pieces of either color, one color at a time
		Pieces move in one direction, up or down, depending on team
		Amount of moves per turn is 14, dividable across the lane
	*/
	// Putting pieces in simple array of arrays
	var i;
	this.positions = [];
	for (i = 0; i < 24; i += 1) {
		this.positions[i] = ['-'];
	}
	// Red pieces are R, black pieces are B
	this.positions[0][0] = 'R';
	this.positions[0][1] = 'R';

	this.positions[4][0] = 'B';
	this.positions[4][1] = 'B';
	this.positions[4][2] = 'B';
	this.positions[4][3] = 'B';
	this.positions[4][4] = 'B';

	this.positions[7][0] = 'B';
	this.positions[7][1] = 'B';
	this.positions[7][2] = 'B';

	this.positions[11][0] = 'R';
	this.positions[11][1] = 'R';
	this.positions[11][2] = 'R';
	this.positions[11][3] = 'R';
	this.positions[11][4] = 'R';

	this.positions[12][0] = 'B';
	this.positions[12][1] = 'B';
	this.positions[12][2] = 'B';
	this.positions[12][3] = 'B';
	this.positions[12][4] = 'B';

	this.positions[16][0] = 'R';
	this.positions[16][1] = 'R';
	this.positions[16][2] = 'R';

	this.positions[18][0] = 'R';
	this.positions[18][1] = 'R';
	this.positions[18][2] = 'R';
	this.positions[18][3] = 'R';
	this.positions[18][4] = 'R';

	this.positions[23][0] = 'B';
	this.positions[23][1] = 'B';
}

BoardPane.prototype.getOccupiedPosition = function () {
	"use strict";
  // Stuff
};

BoardPane.prototype.printPane = function () {
	"use strict";
	var i,
		j;

	for (i = 0; i < 24; i += 1) {
		for (j = 0; j < this.positions[i].length; j += 1) {
			console.log(this.positions[i][j]);
		}
	}
};