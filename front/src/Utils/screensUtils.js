import { useScreensContext } from 'Context/ScreensContext';
import { screensLib } from 'Screens/screensLib';

export const useCurrentScreen = () => {
	const { currentScreenTitle } = useScreensContext();
	const screenComponent = screensLib[currentScreenTitle];
	return screenComponent;
};

export const useNextScreen = () => {
	const { nextScreenTitle } = useScreensContext();
	const screenComponent = screensLib[nextScreenTitle];
	return screenComponent;
};
