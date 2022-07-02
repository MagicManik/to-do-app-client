import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './AddTask.css';

const AddTask = () => {

    const [user] = useAuthState(auth);

    // handle form submit
    const handleTaskForm = event => {

        event.preventDefault();
        const email = user.email;
        const name = event.target.name.value;
        const description = event.target.description.value;

        const task = { name, description, email };

        fetch('https://upper-parliament-00286.herokuapp.com/tasks', {
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

        event.target.reset();
    }

    return (
        <section className='task-form-container'>
            <div className='task-container'>
                <form onSubmit={handleTaskForm} className='task-form mx-auto'>
                    <h2 className='task-title'>Add Your Task</h2>

                    <input className='task-input-field' type="text" name="name" id="" placeholder='Task name' required />

                    <input type='text' className='description-input-field' name="description" id="" placeholder='Task description' required></input>

                    <input className='add-task-button' type="submit" value="Add Task" />

                </form>
            </div>
        </section>
    );
};

export default AddTask;