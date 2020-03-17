import React from 'react'

export default class TodoItem extends React.Component {
    render() {
        const { todo, handleEdit, handleDelete } =this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between">
                { todo.name }
                <div>
                    <span onClick={handleEdit}>
                        <i className="fa fa-pencil text-warning mr-3"></i>
                    </span>
                    <span onClick={handleDelete}>
                        <i className="fa fa-trash text-danger"></i>
                    </span>
                </div>
            </li>
        )
    }
}
