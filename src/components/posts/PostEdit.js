import React from 'react';
import { connect } from 'react-redux';

import { putPost } from '../../store/actions';

class PostEdit extends React.Component {
	state = {
		enableEditing: false,
		editedPost: {
			userId: 0,
			id: 0,
			title: "",
			body: ""
		}
	};

	componentDidMount() {
		const post = this.props.post;

		this.setState({
			editedPost: {
				title: post.title,
				body: post.body,
				userId: post.userId,
				id: post.id
			}
		});
	}

	enableEditHandler = (event) => {
		event.preventDefault();

		const post = this.props.post;

		if (event.target.value === "show") {
			this.setState({
				enableEditing: true
			});
		} else if (event.target.value === "hide") {
			this.setState({
				enableEditing: false,
				editedPost: {
					title: post.title,
					body: post.body,
					userId: post.userId,
					id: post.id
				}
			});
		}
	};

	onChangeHandler = (event) => {
		event.persist();

		if (event.target.name === "title") {
			this.setState(prevState => ({
				editedPost: {
					...prevState.editedPost,
					title: event.target.value
				}
			}));
		} else if (event.target.name === "body") {
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
		this.props.putPost(this.state.editedPost);
		this.props.searchInputHandler();
	};

	render() {
		return (
			<div>
				<button className="ui button" value="show" onClick={this.enableEditHandler}>Show and edit</button>

				{ this.state.enableEditing &&
					<div>
						<button className="ui button" value="hide" onClick={this.enableEditHandler}>Hide and reset</button>
						<form onSubmit={this.onSubmitHandler} className="ui form">
							<p>Title of post</p>
							<input
								name="title"
								type="text"
								value={this.state.editedPost.title}
								onChange={this.onChangeHandler}
							/>
							<p>Body of post</p>
							<input
								name="body"
								type="text"
								value={this.state.editedPost.body}
								onChange={this.onChangeHandler}
							/>
							<input
								className="ui button secondary"
								type="submit"
								value="Edit post"
							/>
						</form>
					</div>
				}
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		putPost: (payload) => dispatch({ ...putPost, ...{payload: payload}})
	}
};

export default connect(null, mapDispatchToProps)(PostEdit);