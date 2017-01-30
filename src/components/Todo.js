import React from 'react';

const Todo = ({ data, index }) => {
	const { text, completed } = data;
	return (
		<li>
			<input id={`checkbox${index}`} type="checkbox" checked={completed} />
			<label htmlFor={`checkbox${index}`}>{text}</label>
		</li>
	);
}

Todo.propTypes = {
	data: React.PropTypes.object.isRequired
};

export default Todo;