import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  };
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  return (
    <div>
      <h1>Add Activity</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>{todo} <button onClick={() => handleDeleteTodo(index)}>Delete</button></li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;