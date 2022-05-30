export const consts = {
	leftMovingKeys: ['ArrowLeft', 'KeyA'],
	rightMovingKeys: ['ArrowRight', 'KeyD'],
	firingKeys: ['Space', 'Enter'],
	getMovingKeys: function () {
		return this.leftMovingKeys.concat(this.rightMovingKeys);
	},
	startingLevel: 1,
	levelSwitchDelay: 2000,
	screenRadius: 50,
	aliensTravelDistance: 45,
	aimAssist: 1.75,
};
