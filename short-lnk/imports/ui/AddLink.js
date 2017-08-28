import React from 'react';
import Modal from 'react-modal';
import {Accounts} from 'meteor/accounts-base';

export default class AddLink extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: '',
			isOpen: false,
			error: ''
		};
	}

	onSubmit(e) {
		e.preventDefault();
		const {url} = this.state;

		Meteor.call('links.insert', url, (err, res) => {
			if(!err) {
				this.handleModalClose();
			} else {
				this.setState({error: err.reason});
			}
		});
	}

	handleModalClose() {
		this.setState({
			url: '',
			isOpen: false,
			error: ''
		});
	}

	handleModalOpen() {
		this.setState({isOpen: true});
	}

	render() {
		return (
			<div>
				<button
					className='button'
					onClick={this.handleModalOpen.bind(this)}
				>+ Add Link</button>
				<Modal
					isOpen={this.state.isOpen}
					contentLabel='Add link'
					onAfterOpen={() => this.refs.url.focus()}
					onRequestClose={this.handleModalClose.bind(this)}
					className='box'
					overlayClassName='boxed-view modal'
				>
					<h1>Add Link</h1>
					{this.state.error ? <p>{this.state.error}</p> : undefined}
					<form
						className='form'
						onSubmit={this.onSubmit.bind(this)}
					>
						<input
							type='text'
							placeholder='URL'
							ref='url'
							value={this.state.url}
							onChange={
								(e) => this.setState({url: e.target.value})
							}
						/>
						<button className='button'>Add Link</button>
						<button
							className='button secondary'
							type='button'
							onClick={this.handleModalClose.bind(this)}
						>Cancel</button>
					</form>
				</Modal>
			</div>
		);
	}
};