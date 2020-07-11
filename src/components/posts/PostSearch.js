import React from 'react';
import { connect } from 'react-redux';

// import axios from '../../axios/posts';

import { getSearchPost } from '../../store/actions';


class PostSearch extends React.Component {
	state = {
		searchInput: ""
	};


	onSubmitHandler = (event) => {
		event.preventDefault();
		console.log('ps submit: ', this.state);
		this.props.getSearchPost2(this.state.searchInput);
	};

	onChangeHandler = (event) => {
		this.setState({ searchInput: event.target.value} );

	};

	render() {
		console.log('ps state: ', this.state);
		console.log('ps props: ', this.props);

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

const mapStateToProps = (state) => {
	return {
		post: state.post
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getSearchPost2: (payload) => dispatch({ ...getSearchPost, payload })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostSearch);