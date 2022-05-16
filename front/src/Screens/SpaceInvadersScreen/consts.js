export const consts = {
	leftMovingKeys: ['ArrowLeft', 'KeyA'],
	rightMovingKeys: ['ArrowRight', 'KeyD'],
	firingKeys: ['Space', 'Enter'],
	getMovingKeys: function () {
		return this.leftMovingKeys.concat(this.rightMovingKeys);
	},
	gameLoopInterval: 100,
	screenEdge: 46,
	shipSpeed: 2,
	fireDelay: 4,
	bulletSpees: 2,
};
