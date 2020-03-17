import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, handleSearch } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book"></i>
                            </div>
                        </div>
                        <input 
                        type="text"
                        ref="name"
                        name="name"
                        value={item ? item : ''}
                        placeholder="Add New Items"
                        className="form-control" 
                        onChange={handleChange}
                        />
                    </div>
                    <button 
                    type="submit"
                    className={item ? 'btn btn-warning btn-block mt-3' : 'btn btn-success btn-block mt-3'}
                    >
                    {item ? 'Update' : 'Submit'}
                    </button>
                </form>

                <input 
                type="search" 
                className="form-control mt-3" 
                name="search" 
                placeholder="Search"
                onChange={handleSearch}
                />
                
            </div>
        )
    }
}
