import React from 'react';
import axios from 'axios';

class PostList extends React.Component {
	state = {
		posts: [],
		server: ""
	};

	componentDidMount() {
		console.log('pl mount');

		axios.get('http://localhost:4000/api/list')
			.then((res) => this.setState({ posts: res.data }))
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		console.log('pl state: ', this.state);
		return (
			<div>
				post list
			</div>
		)
	}
}

export default PostList;