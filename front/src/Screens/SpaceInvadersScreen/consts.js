export const consts = {
	leftMovingKeys: ['ArrowLeft', 'KeyA'],
	rightMovingKeys: ['ArrowRight', 'KeyD'],
	firingKeys: ['Space', 'Enter'],
	getMovingKeys: function () {
		return this.leftMovingKeys.concat(this.rightMovingKeys);
	},
	startingLevel: 1,
	gameLoopInterval: { 1: 50 },
	screenEdge: 50,
	shipSpeed: { 1: 2 },
	bulletsDelay: { 1: 5 },
	bulletSpeed: { 1: 3 },
	bulletsCost: { 1: 8 },
	bulletsRechargeRate: { 1: 0.8 },
	bulletsMaxAmmo: { 1: 100 },
	aliens: {
		1: [
			[1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1],
		],
	},
	aliensSpeed: { 1: { x: 1, y: 3 } },
	aliensHealth: { 1: 1 },
	aliensSize: { x: 10, y: 7 },
	aliensTravelDistance: 45,
	aimAssist: 2,
};
