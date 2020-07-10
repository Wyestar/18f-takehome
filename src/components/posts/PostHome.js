import React from 'react';
import { Link } from 'react-router-dom';

import PostSearch from './PostSearch';


const PostHome = (props) => {
	return (
		<div>
			post home 2
			<div>
				<PostSearch />

				{/*<Link to="/list" className="ui button primary" >post list btn</Link>*/}
			</div>
		</div>
	)
};

export default PostHome;