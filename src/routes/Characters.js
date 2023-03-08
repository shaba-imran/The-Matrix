import { useState } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { CastCardList } from '../components/CardList/CardList';
import castInfo from '../castInfo';

function Characters() {
	const [searchfield, setSearchField] = useState('');

	function onSearchChange(event) {
		setSearchField(event.target.value);
	}

	const filteredCastInfo = castInfo.filter(character => {
		return character.played.toLowerCase().includes(searchfield.toLowerCase());
	});

	return (
		<div>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundary>
					<CastCardList castInfo={filteredCastInfo} />
				</ErrorBoundary>
			</Scroll>
		</div>
	);
}

export default Characters;