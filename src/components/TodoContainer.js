import React from 'react';
import todoData from '../data/mockData.js';
import TodoList from './TodoList';

export default class TodoContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {todos: []};
	}
	componentWillMount() {
		// normally make some async to get data here, simulate w/timeout
		setTimeout(() => {
			this.setState({todos: todoData.todos});
		}, 500);
	}
	render() {
		const { todos } = this.state;
		if (!todos.length) return null;
		return (
			<TodoList todos={todos} />
		);
	}
}
