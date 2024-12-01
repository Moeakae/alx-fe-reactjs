import Reacr, { useState } from 'react';
const addTodoForm = ({ onAddTodo }) => {
    const [text, setText] = useState('');
    const handleSubmit =(e) => { 
        e.preventDefault();
        if (text.trim()) {
            onAddTodo(text);
            setText('');
        }
};
return (
    <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={(e) =>setText(e.target.value)} placeholder='Add a new todo'/>
        <button type='submit'>Add</button>
    </form>
);
};
export default addTodoForm;