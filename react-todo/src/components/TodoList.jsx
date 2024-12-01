import React, { useState } from "react";
const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo App', completed: false },
    ]);
    const addTodo = (text) =>{ 
        setTodos([...todos, { id: Date.now(), text, completed: false }])
};
const toggletTodo = (id) => {
    setTodos(
        todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );
};
const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
};
return (
    <div>
        <h1>Todo List</h1>
        <addTodoForm onAddTodo={addTodo} />
        <ul>
            {todos.map(todo => (
                <li key={todo.id} onClick={() =>toggletTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none',cursor: 'pointer'}}>
                 {todo.text}
                 <button onClick={(e) =>{ e.stopPropagation(); deleteTodo(todo.id); }}>
                    Delete
                 </button>
                </li>
            ))}
        </ul>
    </div>
)
}
const addTodoForm = ({ onAddTodo }) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) { 
            onAddTodo(text);
            setText('');
    }
}
retur (
    <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new todo"/>
        
    </form>
);
}
export default TodoList;