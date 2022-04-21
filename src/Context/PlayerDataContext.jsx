import { CONSTS } from 'consts';
import { useState, createContext, useContext } from 'react';

export const PlayerDataContext = createContext();

export function PlayerDataProvider(props) {
	const initialState = {
		money: 0,
		spentMoney: 0,
		navbarButtons: {
			closeNavbar: { icon: '<', isActive: true },
			money: { icon: '$', isActive: false },
			welcome: { icon: ':)', isActive: true },
			intro: { icon: '...', isActive: true },
		},
	};
	const [playerDataState, setPlayerDataState] = useState(initialState);
	const isNavbarAvailable =
		playerDataState.money + playerDataState.spentMoney >= CONSTS.moneyToNavbar;

	return (
		<PlayerDataContext.Provider value={{ playerDataState, setPlayerDataState, isNavbarAvailable }}>
			{props.children}
		</PlayerDataContext.Provider>
	);
}

export const usePlayerDataContext = () => useContext(PlayerDataContext);
