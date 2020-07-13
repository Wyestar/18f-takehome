import React from 'react';
import { connect } from 'react-redux';

import { putPost } from '../../store/actions';

class PostEdit2 extends React.Component {
	state = {
		enableEditing: false,
		editedPost: {
			title: "",
			body: "",
			userId: 0,
			id: 0
		}
	};

	findPost(id) {
		const post = this.props.fromState.postsStore.allPosts.find(elem => (elem.id === id));
		return post;
	}

	componentDidMount() {
		const post = this.findPost(this.props.postId);
		console.log('pe2 mount 1: ', post)

		this.setState({
			editedPost: {
				title: post.title,
				body: post.body,
				userId: post.userId,
				id: post.id
			}
		});
		console.log('pe2 mount 2: ', this.state.editedPost)
	}

	enableEditHandler = (event) => {
		event.preventDefault();
		this.setState({ enableEditing: true });
	};

	onChangeHandler = (event) => {
		event.persist();
		console.error('pe2 change: ', event.target.value);

		if (event.target.name === "title") {
			console.error('pe2 title test: ', event.target.value);

			this.setState(prevState => ({
				editedPost: {
					...prevState.editedPost,
					title: event.target.value
				}
			}));
		} else if (event.target.name === "body") {
			console.error('pe2 body test: ', event.target.value);

			this.setState(prevState => ({
				editedPost: {
					...prevState.editedPost,
					body: event.target.value
				}
			}))
		}

	};

	onSubmitHandler = (event) => {
		event.preventDefault();
		console.error('pe2 submit: ', this.state.editedPost);
		this.props.putPost2(this.state.editedPost)
	};

	render() {
		console.log('PE2 state:', this.state);
		console.log('PE2 props:', this.props);
		return (
			<div>
				post edit 2
				<button className="ui button" onClick={this.enableEditHandler}>enable edit button</button>

				{ this.state.enableEditing &&
					<div>editing enabled
						<form onSubmit={this.onSubmitHandler} className="ui form">
							<label>edit this post</label>
							<input
								name="title"
								type="text"
								value={this.state.editedPost.title}
								onChange={this.onChangeHandler}
							/>
							<input
								name="body"
								type="text"
								value={this.state.editedPost.body}
								onChange={this.onChangeHandler}
							/>
							<input className="ui button secondary" type="submit" value="Edit post"/>
						</form>
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

const mapDispatchToProps = (dispatch) => {
	return {
		putPost2: (payload) => dispatch({ ...putPost, ...{payload: payload}})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit2);