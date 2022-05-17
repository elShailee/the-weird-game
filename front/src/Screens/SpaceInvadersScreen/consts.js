export const consts = {
	leftMovingKeys: ['ArrowLeft', 'KeyA'],
	rightMovingKeys: ['ArrowRight', 'KeyD'],
	firingKeys: ['Space', 'Enter'],
	getMovingKeys: function () {
		return this.leftMovingKeys.concat(this.rightMovingKeys);
	},
	gameLoopInterval: 50,
	screenEdge: 50,
	shipSpeed: 2,
	bulletsDelay: 5,
	bulletSpeed: 3,
	bulletsCost: 8,
	bulletsRechargeRate: 0.8,
	bulletsMaxAmmo: 100,
	aliensSpeed: { x: 1, y: 3 },
	aliensHealth: 1,
	aliensWidth: 10,
	aliensTravelDistance: 15,
};
