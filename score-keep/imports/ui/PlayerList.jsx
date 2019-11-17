import React from 'react';
import FlipMove from 'react-flip-move';

import Player from './Player.jsx';

export default class PlayerList extends React.Component {
	renderPlayers() {
		if(this.props.players.length === 0) {
			return (<div className="item">
				<p className="item__message">Add your first player to get started!</p>
			</div>);
		} else {
			return this.props.players.map((player) => {
				return <Player key={player._id} player={player} />;
			});
		}
	}

	render() {
		return (<div>
			<FlipMove maintainContainerHeight>{this.renderPlayers()}</FlipMove>
		</div>)
	}
}