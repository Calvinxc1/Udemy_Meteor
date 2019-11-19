import React from 'react';
import { withRouter } from "react-router-dom";

class Link extends React.Component {
	handleSubmit(event) {
		event.preventDefault();
		this.props.history.push('/')
	}

	render() {
		return (<div>
			<form
				className="form"
				onSubmit={this.handleSubmit.bind(this)}
			>
				<button className="button">Login Page</button>
			</form>
		</div>);
	}
}

export default withRouter(Link);