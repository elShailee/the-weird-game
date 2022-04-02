import { ChaptersProvider } from 'Context/ChaptersContext';
import Game from 'Game/Game';

function App() {
	return (
		<ChaptersProvider>
			<Game />
		</ChaptersProvider>
	);
}

export default App;
