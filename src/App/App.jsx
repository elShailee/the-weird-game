import { ChaptersProvider } from 'Context/ChaptersContext';
import { Game } from 'Game/Game';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ChaptersProvider>
				<Game />
			</ChaptersProvider>
		</ThemeProvider>
	);
}

export default App;
