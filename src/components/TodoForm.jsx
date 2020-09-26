import React, { useState } from 'react';

function TodoForm() {
	const [input, setInput] = useState('');
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	return (
		<form className="todo-form">
			<input type="text" onChange={handleChange} placeholder="Add a todo" value={input} name="text" className="todo-input" />
		</form>
	);
}

export default TodoForm;
