import React from 'react';

export const GameStartModal = ({ score, startGame }) => {
	const style = {
		width: '50%',
		height: '70vh',
		backgroundColor: 'blue',
		opacity: 0.4,
	};

	return (
		<div style={style}>
			<div onClick={startGame}>{score === 0 ? 'Start new game!' : 'Try again!'}</div>
		</div>
	);
};
