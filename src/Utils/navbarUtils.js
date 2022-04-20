import { usePlayerDataContext } from 'Context/PlayerDataContext';
import { cloneDeep } from 'lodash';

export const useTurnNavButtonOn = buttonTitle => {
	useToggleNavButton({ buttonTitle, newShownState: true });
};

const useToggleNavButton = ({ buttonTitle, newShownState }) => {
	const { playerDataState, setPlayerDataState } = usePlayerDataContext();
	const newPlayerDataState = cloneDeep(playerDataState);
	const buttonObj = newPlayerDataState.navbarButtons[buttonTitle];
	buttonObj.isActive = newShownState;
	console.log(newPlayerDataState);
};
