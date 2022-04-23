import { PlayerDataProvider } from 'Context/PlayerDataContext';
import { ScreensProvider } from 'Context/ScreensContext';
import { Game } from 'Game/Game';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ScreensProvider>
				<PlayerDataProvider>
					<Game />
				</PlayerDataProvider>
			</ScreensProvider>
		</ThemeProvider>
	);
}

export default App;
