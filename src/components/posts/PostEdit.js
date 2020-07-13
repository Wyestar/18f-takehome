import React from 'react';
import { connect } from 'react-redux';

import { putPost } from '../../store/actions';


// enable edit of title that changes post
class PostEdit extends React.Component {
	state = {
		enableEditTitle: false,
		enableEditBody: false,
		editedPost: {
			title: "",
			body: "",
			userId: 0,
			id: 0
		}
	};

	componentDidMount() {
		this.setState({
			editedPost: Object.assign({}, this.state.editedPost, this.props.location.post)
		})
	}

	onEditTitleChangeHandler = (event) => {
		// event.preventDefault();
		console.error('PE edit title submit: ', event.target);
		this.setState({
			editedPost: {
				title: event.target.value
			}
		});

	};

	onEditTitleSubmitHandler = (event) => {
		event.preventDefault();
		console.error('PE edit title submit: ', this.state.editedPost.title)
		// send new post data to store
		// this.props.putPost2

	};

	enableEditTitleHandler = (event) => {
		event.preventDefault();
		this.setState({
			enableEditTitle: true
		})
	};

	render() {
		const postData = this.props.location.post;
		// postData.id, postData.userId
		console.log('PE props: ', postData);
		console.log('PE state: ', this.state.editedPost);
		return (
			<div>
				post edit2
				<div className="ui segment">

					{postData.title}

					<button className="ui button" onClick={this.enableEditTitleHandler}>enable edit button</button>

					{ this.state.enableEditTitle &&

						<form onSubmit={this.onEditTitleSubmitHandler} className="ui form">
							<label>edit this post's title</label>
							<input
								type="text"
								value={this.state.editedPost.title}
								onChange={this.onEditTitleChangeHandler}
							/>
							<input className="ui button secondary" type="submit" value="Edit title"/>
							<input className="ui button primary" type="submit" value="Search exact title"/>
						</form>
					}
					<div>break</div>

					{/*<form onSubmit={this.onEditBodySubmitHandler} className="ui form">*/}
					{/*	{post.body}*/}
					{/*	<input className="ui button secondary" type="submit" value="Edit body"/>*/}
					{/*</form>*/}
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
		putPost2: (payload) => dispatch( { ...putPost, payload } )
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);