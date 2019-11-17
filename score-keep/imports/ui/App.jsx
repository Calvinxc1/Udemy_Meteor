import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar.jsx';
import PlayerList from './PlayerList.jsx';
import AddPlayer from './AddPlayer.jsx';

export default class App extends React.Component {
	render() {
		return (<div>
			<TitleBar title={this.props.title} />
			<div className="wrapper">
				<PlayerList players={this.props.players} />
				<AddPlayer />
			</div>
		</div>);
	}
}

App.propTypes = {
	title: PropTypes.string.isRequired,
	players: PropTypes.array.isRequired,
};