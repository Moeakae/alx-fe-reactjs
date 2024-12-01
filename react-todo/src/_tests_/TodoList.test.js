import React from "react";
import { render, screen, fireEvent } from  '@testing-library/react';
 import '@testing-library/jest-dom';
 import TodoList from "../components/TodoList";
describe('TodoList', () => { 
 test('render initial todos', () => {
    render(<TodoList />);
    const input = screen.getByText('TodoList')
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
 });
 test('adds a new todo', () => {
     render(<TodoList />);
     const elem = screen.getByPlaceholderText('Add a new todo');
     const addButton = screen.getByText('Add');
     expect(screen.getByText('New Todo')).toBeInTheDocument();
 });
 test('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: linr-through');

 });
 test('delete a todo', () => { 
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
 });
});