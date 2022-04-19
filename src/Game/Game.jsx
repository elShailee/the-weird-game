import { useCurrentScreen } from 'Utils/screensUtils';

export const Game = () => {
	const ScreenComponent = useCurrentScreen();

	return ScreenComponent ? <ScreenComponent /> : <div>Game Fallback</div>;
};
