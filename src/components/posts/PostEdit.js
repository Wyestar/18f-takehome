import React from 'react';
import { connect } from 'react-redux';

import { putPost } from '../../store/actions';


// enable edit of title that changes post
class PostEdit extends React.Component {
	state = {
		title: "",
		body: "",
		userId: 0,
		id: 0
	};

	onChangeHandler = (event) => {
		event.preventDefault();

	};

	onSubmitHandler = (event) => {
		// send new post data to store
	};

	render() {
		const postData = this.props.location.post
		console.log('PE props: ', postData);
		return (
			<div>
				post edit2
				===
				{postData.title}
				===
				{postData.body}

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