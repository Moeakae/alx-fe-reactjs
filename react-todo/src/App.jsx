import React from 'react';
import TodoList from './components/TodoList';
import addTodoForm from './components/AddTodoForm';

const App = () => {
    return (
      <div>
         <TodoList />
         <addTodoForm />
      </div>
    );
  };
export default App;
