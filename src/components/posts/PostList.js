import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import axios from '../../axios/posts';

import PostEdit from "./PostEdit";

import { getAllPosts } from '../../store/actions';
// import { }

// show list of posts, attach edit button to each. goes to edit component with post info
class PostList extends React.Component {
	state = {
		posts: [],
		server: ""
	};

	componentDidMount() {
		// console.log('pl mount');

		// this.props.getAllPosts2();
		// console.log('pl mount2state: ', this.state);
		// console.log('pl mount2props: ', this.props);

		// this.setState({posts: this.prop})
	}

	renderPostsList() {
		// this.props.fromState.postsStore.matchingPosts
		return this.props.matchingPosts.map(post => {
			return (
				<div className="item" key={post.id}>
					<div>
						{post.title}
					</div>

					<div>
						<i className="middle aligned icon chevron right"></i>edit post

						<Link className="ui button primary" to={{
							pathname: `/edit/${post.id}`,
							post
						}}>
							edit post link</Link>

					</div>

				</div>
			)
		})
	}

	render() {
		console.log('pl state: ', this.state);
		console.log('pl props: ', this.props);

		return (
			<div>
				post list2
				{/*<PostEdit post={this.props.posts.plpl.allPosts[1]}/>*/}
				{ this.props.matchingPosts.length &&

					<div className="ui celled list">{this.renderPostsList()}

					</div>

				}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	console.error('PL state: ', state)
	return {
		fromState: state
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAllPosts2: () => dispatch(getAllPosts)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

// export default PostList;