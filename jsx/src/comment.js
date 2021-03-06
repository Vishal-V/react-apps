import React from 'react';
import faker from 'faker';

const Comment = (props) => {

	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={props.img}/>
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metadata">
					<span>{props.timeAgo}</span>
				</div>
				<div className="text">
					{props.cont}
				</div>
			</div>
		</div>
	);
};

export default Comment;