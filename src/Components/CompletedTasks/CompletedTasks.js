import React from 'react';
import useCompleteTasks from '../../hooks/useCompleteTasks';
import './CompletedTasks.css';

const CompletedTasks = () => {
    const [completeTasks, setCompleteTasks] = useCompleteTasks();
    return (
        <section className='tasks-bg'>
            <div className='tasks-container'>

                {
                    completeTasks.map(completeTask =>
                        <div className='task-body'>
                            <h5 >{completeTask.name}</h5>
                            <p>{completeTask.description}</p>
                        </div>

                    )
                }

            </div>
        </section>
    );
};

export default CompletedTasks;