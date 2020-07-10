import React from 'react';
// import axios from '../../axios/posts';


class PostSearch extends React.Component {
	state = {
		searchInput: ""
	};

	onSubmitHandler = (event) => {
		event.preventDefault();
		console.log('ps submit: ', this.state.searchInput);
	};

	onChangeHandler = (event) => {
		this.setState({ searchInput: event.target.value} );
	};

	render() {
		console.log('ps: ', this.state);
		return (
			<div>
				post search component
				<div className="ui segment">
					<form onSubmit={this.onSubmitHandler} className="ui form">
						<div className="field">
							<label>Search posts by title</label>
							<input
								type="text"
								value={this.state.searchInput}
								onChange={this.onChangeHandler}
							/>
							<input className="ui button primary" type="submit" value="Search"/>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default PostSearch;