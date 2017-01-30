import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
	return (
		<ul className="todo-list">
			{todos.map((todo, i) => <Todo key={i} data={todo} index={i} />)}
		</ul>
	)
};

TodoList.propTypes = {
	todos: React.PropTypes.array.isRequired
};

export default TodoList;
