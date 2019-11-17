import React from 'react';

import Player from './Player.jsx';

export default class PlayerList extends React.Component {
	renderPlayers() {
		return this.props.players.map((player) => {
			return <Player key={player._id} player={player} />
		});
	}

	render() {
		return (<div>
			{this.renderPlayers()}
		</div>)
	}
}