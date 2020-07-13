import React from 'react';
import { connect } from 'react-redux';

import PostEdit from "./PostEdit";

class PostList extends React.Component {
	state = {
		posts: [],
		server: ""
	};

	renderPostsList() {
		return this.props.matchingPosts.map(post => {
			return (
				<div className="item" key={post.id}>
					<div>
						Id of post: {post.id}
					</div>
					<div>
						<PostEdit searchInputHandler={this.props.searchInputHandler} postId={post.id}/>
					</div>
				</div>
			)
		})
	}

	render() {
		// console.log('pl state: ', this.state);
		// console.log('pl props: ', this.props);

		return (
			<div>
				Posts with matching titles:
				{ this.props.matchingPosts.length &&
				<div className="ui celled list">{this.renderPostsList()}
				</div>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		fromState: state
	}
};

// export default connect(mapStateToProps, null)(PostList);
