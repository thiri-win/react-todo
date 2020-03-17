import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
    render() {
        const { todos, clearList, handleDelete, handleEdit} = this.props;
        return (
            <ul className="list-group my-3">
                <h3>List</h3>
                {todos.map(todo => 
                <TodoItem 
                key = {todo.id}
                todo = {todo}
                handleDelete = {handleDelete(todo.id)}
                handleEdit = {handleEdit(todo.id)}
                />
                )}    
                <button onClick={clearList} className="btn btn-block btn-danger mt-3">CLEAR ALL LIST</button>          
            </ul>
        )
    }
}