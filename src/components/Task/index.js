import React, {Component} from 'react';
import './Task.css';
import Button from '../Button';

export default class Task extends Component{
    removeTask = () => {
        return this.props.onClickDelete(this.props.id)
    }

    render(){
        return (
            <li className='task-item'>
                <span className='task-text'>{this.props.text}</span>
                <Button onClick={this.removeTask} text={this.props.btnText}/>
            </li>
        )
    }
}
