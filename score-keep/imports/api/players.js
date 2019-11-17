import numeral from 'numeral';

import {Mongo} from 'meteor/mongo';

export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
	var rank = 1;
	return players.map((player, index) => {
		if((index !== 0) && (players[index-1].score > player.score)) {
			rank ++;
		}

		return {
			...player,
			rank,
			position: numeral(rank).format('0o'),
		}
	});
}