import React from 'react';
import { withRouter } from "react-router-dom";

class Link extends React.Component {
	handleSubmit(event) {
		event.preventDefault();
		this.props.history.push('/')
	}

	render() {
		return (<div>
			<h1>Your Links</h1>
			
			<button onClick={this.handleSubmit.bind(this)}>Logout</button>
		</div>);
	}
}

export default withRouter(Link);