import { ChaptersProvider } from 'Context/ChaptersContext';
import { TextsProvider } from 'Context/TextsContext';
import { Game } from 'Game/Game';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<TextsProvider>
				<ChaptersProvider>
					<Game />
				</ChaptersProvider>
			</TextsProvider>
		</ThemeProvider>
	);
}

export default App;
