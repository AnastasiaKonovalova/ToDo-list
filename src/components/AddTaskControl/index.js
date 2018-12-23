import React, {Component} from 'react';
import Button from '../Button';
import './AddTaskControl.css';

export default class AddTaskControl extends Component{
    state = {
        taskInput: '',
    }

    changeInput = e => {
        this.setState({
            taskInput: e.target.value
        })
    }

    addTaskOnEnter = (e) => {
        if (e.key === 'Enter' && this.state.messageInput !== ''){
            this.addTask()
        }
    }

    addTask = () => {
        if (this.state.taskInput !==''){
            this.props.onClickHandler(this.state.taskInput);
            this.setState({
                taskInput: ''
            })
        }
    }

    render(){
        return (
            <div className='add-task'>
                <input 
                    className='input-task'
                    value={this.state.taskInput}
                    onChange={this.changeInput}
                    onKeyPress={this.addTaskOnEnter}
                    placeholder='Задача'
                />
                <Button text='Добавить задачу' onClick={this.addTask}/>
            </div>

        )
    }
}