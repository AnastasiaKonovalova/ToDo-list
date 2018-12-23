import React, { Component } from 'react';
import './ToDoList.css';
import Task from '../Task';
import AddTaskControl from '../AddTaskControl';


export default class ToDoList extends Component{
    state = {
        // taskInput: '',
        tasks: []
    }

    onClickAdd = (taskText) => {
        this.setState({
            tasks: [ ...this.state.tasks, {text: taskText, id: Date.now()} ]
        })
    }

    onClickRemove = (id) => {
        this.setState({
            tasks: this.state.tasks.filter( task => task.id !== id )
        })
    }

    render(){
        return (
            <div className='to-do-list'>
                <AddTaskControl onClickHandler={this.onClickAdd}/>
                <ul className='tasks-list'>
                    {this.state.tasks.map( (task) => {
                        return (
                            <Task 
                                key={task.id} 
                                text={task.text} 
                                id={task.id}
                                btnText='Удалить'
                                onClickDelete={this.onClickRemove}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}