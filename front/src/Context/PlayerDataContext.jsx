import { useState, createContext, useContext } from 'react';

export const PlayerDataContext = createContext();

export function PlayerDataProvider(props) {
	const initialState = {
		money: 0,
		spentMoney: 0,
		navbarButtons: {
			closeNavbar: { icon: '<', isActive: true },
			money: { icon: '$', isActive: true },
			shop: { icon: '&', isActive: true },
		},
	};
	const [playerDataState, setPlayerDataState] = useState(initialState);

	return (
		<PlayerDataContext.Provider value={{ playerDataState, setPlayerDataState }}>
			{props.children}
		</PlayerDataContext.Provider>
	);
}

export const usePlayerDataContext = () => useContext(PlayerDataContext);
