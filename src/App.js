import React from 'react';
import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends React.Component {

  state = {
    todos: [
      {id: 1, name: 'Apple', editItem: false},
      {id: 2, name: 'Orange', editItem: false},
    ],
    id: uuid(),
    item: '',
    editItem: false,
    search: '',
  }

  name = React.createRef();

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {id: this.state.id, name: this.state.item, editItem: false}
      ],
      item: '',
      id:uuid(),
      editItem:false
    })
  }

  handleEdit = (id) => () => {
    const filteredTodo = this.state.todos.find(todo => todo.id === id);
    console.log(filteredTodo);
    this.setState({
      todos : this.state.todos.filter( todo => todo.id !== id),
      item : filteredTodo.name,
      id: id,
      editItem: true,
    })
    console.log('todos state', this.state.todos);
  }
  handleDelete = (id) => () => {
    this.setState({
      todos: this.state.todos.filter( todo => todo.id !== id )
    });
  }
  clearList = () => {
    this.setState({
      todos:[]
    })
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    const filter = this.state.todos.filter( todo => 
      todo.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
      return (
        <div className="container col-lg-8 my-3">
        <h3>React ToDo List</h3>
        <TodoInput 
        id = {this.state.id}
        item = {this.state.item}
        handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}
        handleSearch = {this.handleSearch}
        />
        <TodoList 
        todos = {filter}
        clearList = {this.clearList}
        handleDelete = {this.handleDelete}
        handleEdit = {this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
