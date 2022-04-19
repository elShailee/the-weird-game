import { useState, createContext, useContext } from 'react';

export const PlayerDataContext = createContext();

export function PlayerDataProvider(props) {
	const initialState = {
		shouldShowNavbar: false,
	};
	const [playerDataState, setPlayerDataState] = useState(initialState);

	return (
		<PlayerDataContext.Provider value={{ playerDataState, setPlayerDataState }}>
			{props.children}
		</PlayerDataContext.Provider>
	);
}

export const usePlayerDataContext = () => useContext(PlayerDataContext);
