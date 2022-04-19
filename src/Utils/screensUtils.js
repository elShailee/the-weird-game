import { useScreensContext } from 'Context/ScreensContext';
import { screensLib } from 'Screens/screensLib';

export const useCurrentScreen = () => {
	const { currentScreenTitle } = useScreensContext();
	const screenComponent = screensLib[currentScreenTitle];
	return screenComponent;
};
