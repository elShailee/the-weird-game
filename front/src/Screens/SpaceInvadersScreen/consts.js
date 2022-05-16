export const consts = {
	leftMovingKeys: ['ArrowLeft', 'KeyA'],
	rightMovingKeys: ['ArrowRight', 'KeyD'],
	firingKeys: ['Space', 'Enter'],
	getMovingKeys: function () {
		return this.leftMovingKeys.concat(this.rightMovingKeys);
	},
	gameLoopInterval: 100,
	screenEdge: 50,
	shipSpeed: 2,
	bulletsDelay: 2,
	bulletSpeed: 3,
	bulletsCost: 8,
	bulletsRechargeRate: 2,
	bulletsMaxAmmo: 100,
};
