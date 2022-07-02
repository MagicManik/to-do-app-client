import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import UpdateModal from '../../UpdateModal/UpdateModal';
import './Task.css';

const Task = ({ task }) => {

    const [user] = useAuthState(auth);

    const { _id, name, description } = task;

    const [tasks, setTasks] = useState([]);

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure to delete?');

        if (proceed) {
            const url = `https://upper-parliament-00286.herokuapp.com/task/${id}`
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

    const handleTaskComplete = _id => {
        // setLineThrough(true);
        // toast('Task completed')
        const email = user.email;


        const task = { name, description, email };

        fetch('https://upper-parliament-00286.herokuapp.com/complete', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {

                // task added success হলে
                if (data.insertedId) {
                    toast.success('Task is added successfully')
                }

                // task added success না হলে
                else {
                    toast.error('Task Addition Failed')
                }
            })

    }

    return (
        <div className='task-body'>
            <h5 className={lineThrough ? 'linethrough' : ''}>{name}</h5>
            <p className={lineThrough ? 'linethrough' : ''}>{description}</p>
            <div>
                <div className='button-container'>

                    <button onClick={() => handleDelete(_id)} className='task-delete-btn'><FontAwesomeIcon icon={faTrash} ></FontAwesomeIcon></button>


                    <UpdateModal _id={_id}></UpdateModal>
                </div>
                <button onClick={() => handleTaskComplete(_id)} className='task-complete-btn'>Complete</button>
            </div>
        </div>
    );
};

export default Task;