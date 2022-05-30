const levelsScalings = {
	levelNum: {
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		6: 6,
	},
	gameLoopInterval: {
		1: 50,
		2: 50,
		3: 50,
		4: 50,
		5: 40,
		6: 40,
	},
	shipSpeed: {
		1: 2,
		2: 2,
		3: 2,
		4: 2,
		5: 2,
		6: 2,
	},
	reloadCooling: {
		1: false,
		2: false,
		3: false,
		4: true,
		5: true,
		6: true,
	},
	bulletsDelay: {
		1: 3,
		2: 3,
		3: 3,
		4: 3,
		5: 3,
		6: 3,
	},
	bulletSpeed: {
		1: 3,
		2: 3,
		3: 3,
		4: 3,
		5: 3,
		6: 3,
	},
	bulletsCost: {
		1: 8,
		2: 8,
		3: 8,
		4: 8,
		5: 8,
		6: 8,
	},
	bulletsRechargeRate: {
		1: 0.8,
		2: 0.8,
		3: 0.8,
		4: 0.8,
		5: 0.8,
		6: 0.8,
	},
	bulletsMaxAmmo: {
		1: 100,
		2: 100,
		3: 100,
		4: 100,
		5: 100,
		6: 100,
	},
	aliens: {
		1: [[1]],
		2: [[1, 1, 1]],
		3: [
			[1, 1, 1],
			[1, 1, 1],
		],
		4: [
			[1, 1, 1],
			[1, 2, 2, 1],
			[1, 1, 1],
		],
		5: [
			[2, 2, 2, 2],
			[2, 2, 2, 2, 2],
			[2, 2, 2, 2],
		],
		6: [
			[2, 2, 2, 2, 2],
			[2, 2, 2, 2, 2, 2],
			[3, 3, 3, 3, 3],
		],
	},
	aliensSpeed: {
		1: { x: 0.75, y: 5 },
		2: { x: 0.75, y: 5 },
		3: { x: 0.75, y: 5 },
		4: { x: 0.75, y: 5 },
		5: { x: 0.75, y: 5 },
		6: { x: 0.75, y: 5 },
	},
	aliensSize: {
		1: { x: 10, y: 7 },
		2: { x: 10, y: 7 },
		3: { x: 10, y: 7 },
		4: { x: 10, y: 7 },
		5: { x: 10, y: 7 },
		6: { x: 10, y: 7 },
	},
};

export const getLevelByNum = levelNum => {
	const levelObject = {};
	Object.entries(levelsScalings).forEach(entrie => {
		const attribute = entrie[0];
		const scales = entrie[1];
		levelObject[attribute] = scales[levelNum];
	});
	return levelObject;
};