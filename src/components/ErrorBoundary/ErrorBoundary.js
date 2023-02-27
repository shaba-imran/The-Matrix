import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1 className='tracked'>This line is tapped, refresh the page</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary;