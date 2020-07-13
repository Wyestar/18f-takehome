import React from 'react';
import { connect } from 'react-redux';

import { putPost } from '../../store/actions';

class PostEdit extends React.Component {
	state = {
		enableEditing: false,
		editedPost: {
			title: "",
			body: "",
			userId: 0,
			id: 0
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
		this.setState({ enableEditing: true });
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
		this.props.putPost(this.state.editedPost)
		this.props.searchInputHandler();
	};

	render() {
		return (
			<div>
				<button className="ui button" onClick={this.enableEditHandler}>Show and edit</button>

				{ this.state.enableEditing &&
					<div>
						<form onSubmit={this.onSubmitHandler} className="ui form">
							<label>Edit this post</label>
							<div>Title of post</div>
							<input
								name="title"
								type="text"
								value={this.state.editedPost.title}
								onChange={this.onChangeHandler}
							/>
							<div>Body of post</div>
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

const mapDispatchToProps = (dispatch) => {
	return {
		putPost: (payload) => dispatch({ ...putPost, ...{payload: payload}})
	}
};

export default connect(null, mapDispatchToProps)(PostEdit);