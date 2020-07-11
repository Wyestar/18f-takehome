import React from 'react';
import { connect } from 'react-redux';
// import axios from '../../axios/posts';

// import PostSearch from "./PostSearch";

import { getAllPosts } from '../../store/actions';
// import { }

// show list of posts, attach edit button to each. goes to edit component with post info
class PostList extends React.Component {
	state = {
		posts: [],
		server: ""
	};

	componentDidMount() {
		console.log('pl mount');

		this.props.getAllPosts2();

		// axios.get('http://localhost:4000/api/list')
		// 	.then((res) => this.setState({ posts: res.data }))
		// 	.catch(err => {
		// 		console.error(err);
		// 	});
		console.log('pl mount2state: ', this.state);

		console.log('pl mount2props: ', this.props);

		// this.setState({posts: this.prop})
	}

	render() {
		console.log('pl state: ', this.state);
		console.log('pl props: ', this.props);

		return (
			<div>
				post list2
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	console.error('PL state: ', state)
	return {
		posts: state.posts
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAllPosts2: () => dispatch(getAllPosts)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

// export default PostList;