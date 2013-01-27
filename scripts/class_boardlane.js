// BoardPane is a vertical slice of the game area, 4 instances,
// instances not directly affected by each other

function BoardLane() {
	'use strict';
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
		this.positions[i] = [0, '-'];
	}
	// Red pieces are R, black pieces are B
	this.positions[0] = [2, 'R'];
	this.positions[5] = [5, 'B'];
	this.positions[7] = [3, 'B'];
	this.positions[11] = [5, 'R'];
	this.positions[12] = [6, 'B'];
	this.positions[16] = [3, 'R'];
	this.positions[18] = [5, 'R'];
	this.positions[23] = [2, 'B'];
}

// Function to move pieces
BoardLane.prototype.makeMove = function (color, position) {
	'use strict';
	var direction,
		nextPosition;

	// Pick direction the piece should be moved based on color
	if (color === 'R') {
		direction = 1;
	} else if (color === 'B') {
		direction = -1;
	} else {
		console.error("makeMove was called with the invalid color: " + color);
		return;
	}

	nextPosition = position + direction;

	// Check if the position and piece exists
	if (position > -1 && position < 24 && this.positions[position][1] === color) {
		// To do: Check if the next position is blocked by opponent
		// Remove the piece from the old position
		this.positions[position][0] -= 1;

		// If the old position is empty, change color
		if (this.positions[position][0] === 0) {
			this.positions[position][1] = '-';
		}

		// This is assuming that the next position does not contain opponent piece
		// which is WRONG
		this.positions[nextPosition][0] += 1;
		this.positions[nextPosition][1] = color;
	} else {
		console.error("The position " + (position + 1) + " does not have a " + color + " piece!");
	}
};

BoardLane.prototype.getOccupiedPositions = function () {
  // Stuff
	'use strict';
};

// Function for AI later on
BoardLane.prototype.getAllValidMoves = function (color) {
	// return all possible moves for player with color
	'use strict';
};

// Helper function until we have something to show on-screen
BoardLane.prototype.printPane = function () {
	'use strict';
	var i,
		j,
		currentPosition = '';

	for (i = 0; i < 24; i += 1) {
		currentPosition = '';
		for (j = 0; j < this.positions[i][0]; j += 1) {
			currentPosition += this.positions[i][1];
		}
		console.log("Position " + (i + 1) + ": " + currentPosition);
	}
};