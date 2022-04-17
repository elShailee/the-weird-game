import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { AddButton, ChapterContainer } from './styles';

export default function Chapter01() {
	const theme = useContext(ThemeContext);

	return (
		<ChapterContainer>
			<AddButton bgc={theme.colors.chapter01.addButton.BG}>+</AddButton>
		</ChapterContainer>
	);
}
