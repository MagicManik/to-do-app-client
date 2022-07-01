import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Task.css';

const Task = ({ task }) => {

    const { _id, name, description } = task;

    const [tasks, setTasks] = useState([]);

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure to delete?');

        if (proceed) {
            const url = `http://localhost:5000/task/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = tasks.filter(task => task._id !== id);
                    setTasks(remaining);
                })
        }
    };


    const [lineThrough, setLineThrough] = useState(false);

    const handleTaskComplete = id => {
        setLineThrough(true);
        toast('Task completed')
    }

    return (
        <div className='task-body'>
            <h5 className={lineThrough ? 'linethrough' : ''}>{name}</h5>
            <p className={lineThrough ? 'linethrough' : ''}>{description}</p>
            <div>
                <div className='button-container'>

                    <button onClick={() => handleDelete(_id)} className='task-delete-btn'><FontAwesomeIcon icon={faTrash} ></FontAwesomeIcon></button>


                    <button className='task-delete-btn edit-button'>Edit</button>

                </div>
                <button onClick={() => handleTaskComplete(_id)} className='task-complete-btn'>Complete</button>
            </div>
        </div>
    );
};

export default Task;