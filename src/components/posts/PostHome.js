import React from 'react';
import { connect } from 'react-redux';

import { getAllPosts, getPartialSearchPost } from '../../store/actions';

import PostList from "./PostList";

class PostHome extends React.Component {
	state = {
		searchInput: ""
	};

	componentDidMount() {
		this.props.getAllPosts();
	}

	onSubmitHandler = (event) => {
		event.preventDefault();
		this.props.getPartialSearchPost(this.state.searchInput);
	};

	onChangeHandler = (event) => {
		this.setState({ searchInput: event.target.value} );
	};

	searchInputHandler = () => {
		this.setState({ searchInput: "" });
	};

	render() {
		const canSearch = this.state.searchInput;

		return (
			<div>
				<div className="ui segment">
					<form onSubmit={this.onSubmitHandler} className="ui form">
						<div className="field">
							<label>Search posts by title</label>
							<input
								type="text"
								value={this.state.searchInput}
								onChange={this.onChangeHandler}
							/>
							<input
								className="ui button primary"
								type="submit"
								disabled={!canSearch}
								value="Search"
							/>
						</div>
					</form>
				</div>

				<div>
					{this.props.fromState.postsStore.matchingPosts.length > 0 &&
					<PostList
						searchInputHandler= {this.searchInputHandler}
						matchingPosts={this.props.fromState.postsStore.matchingPosts}/>
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
		getAllPosts: () => dispatch(getAllPosts),
		getPartialSearchPost: (payload) => dispatch({ ...getPartialSearchPost, payload })
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PostHome);