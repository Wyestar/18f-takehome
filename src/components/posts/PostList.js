import React from 'react';

import PostEdit from "./PostEdit";

const PostList = (props) => {
	const { matchingPosts, searchInputHandler } = props;
	return (
		<div>
			<p>Posts with matching titles:</p>
				{ matchingPosts.length > 0 &&
					<div className="ui celled list">
						{ matchingPosts.map(post => {
							return (
								<div className="item" key={post.id}>
									<p>Id of post: {post.id}</p>
									<PostEdit
										searchInputHandler={searchInputHandler}
										post={post}
									/>
								</div>
							)
						})}
					</div>
				}
			</div>
	)
};

export default PostList;
