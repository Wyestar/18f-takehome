import React from 'react';

import PostEdit from "./PostEdit";

const PostList = (props) => {
	const { matchingPosts, searchInputHandler } = props;
	return (
		<div>
			Posts with matching titles:
				{ matchingPosts.length > 0 &&
					<div className="ui celled list">
						{ matchingPosts.map(post => {
							return (
								<div className="item" key={post.id}>
									<div>
										Id of post: {post.id}
									</div>
									<div>
										<PostEdit searchInputHandler={searchInputHandler} post={post}/>
									</div>
								</div>
							)
						})}


					</div>
				}
			</div>
	)
};

export default PostList;
