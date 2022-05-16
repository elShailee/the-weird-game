import React from 'react';
import { AmmoBarContainer, AmmoBarValue } from './styles';

export const AmmoBar = ({ ammoCount, maxAmmo }) => {
	const ammoPercent = (100 * ammoCount) / maxAmmo;
	return (
		<AmmoBarContainer>
			<AmmoBarValue ammoPercent={ammoPercent} />
		</AmmoBarContainer>
	);
};
