import React, { Component } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { CastCardList } from '../components/CardList/CardList';
import castInfo from '../castInfo';

class Characters extends Component {
	constructor() {
		super();
		this.state = {
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const filteredCastInfo = castInfo.filter(character => {
			return character.played.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		return (
			<div>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CastCardList castInfo={filteredCastInfo} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default Characters;