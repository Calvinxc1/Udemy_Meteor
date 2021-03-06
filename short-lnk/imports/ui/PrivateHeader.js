import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import PropTypes from 'prop-types';

const PrivateHeader = (props) => {
	return (
		<div className='header'><div className='content'>
			<h1 className='title'>{props.title}</h1>
			<button
				className='button link-text'
				onClick={() => Accounts.logout()}
			>Logout</button>
		</div></div>
	)
};

PrivateHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export default PrivateHeader;