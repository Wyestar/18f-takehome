import React from 'react';
import { connect } from 'react-redux';

// import axios from '../../axios/posts';

import { getAllPosts, getSearchPost, getPartialSearchPost } from '../../store/actions';
import PostList from "./PostList";


class PostHome extends React.Component {
	state = {
		searchInput: ""
	};

	componentDidMount() {
		this.props.getAllPosts2();
	}


	onSubmitHandler = (event) => {
		event.preventDefault();
		console.log('ph submit1: ', this.state.searchInput);
		// this.props.getSearchPost2(this.state.searchInput);

		this.props.getPartialSearchPost2(this.state.searchInput);
		console.log('ph submit2: ', this.state);
		console.log('ph submit2: ', this.props);

	};

	onChangeHandler = (event) => {
		this.setState({ searchInput: event.target.value} );
	};

	render() {
		console.log('ph state: ', this.state);
		console.log('ph props: ', this.props);

		return (
			<div>
				post home with partial search component
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

				<div>
					show list of posts from api
					{this.props.fromState.postsStore.matchingPosts &&
					<PostList matchingPosts={this.props.fromState.postsStore.matchingPosts}/>
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		fromState: state
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAllPosts2: () => dispatch(getAllPosts),
		getSearchPost2: (payload) => dispatch({ ...getSearchPost, payload }),
		getPartialSearchPost2: (payload) => dispatch({ ...getPartialSearchPost, payload })
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PostHome);