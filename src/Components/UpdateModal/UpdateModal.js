import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import useTasks from '../../hooks/useTasks';

const UpdateModal = ({ _id }) => {

    const [tasks, setTasks] = useTasks();

    // console.log(tasks)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleModal = event => {
        event.preventDefault();
        const name = event.target.title.value;
        const description = event.target.description.value;


        // amena
        const updateTask = {
            name,
            description
        };


        // update data to server
        const url = `https://upper-parliament-00286.herokuapp.com/taskupdate/${_id}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateTask),
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
            })


        event.target.reset();

        <Button variant="primary" onClick={handleClose()}>
            Save Changes
        </Button>
        // setSingleBill(null);


    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleModal}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control
                                type="text"
                                name='title'
                                placeholder="Task Title"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Task Description</Form.Label>
                            <Form.Control as="textarea" name='description' rows={3}
                            />

                            <input type="submit" value='Submit' className="btn btn-primary d-block mt-4 mx-auto text-white w-50" />
                        </Form.Group>
                    </Form>

                </Modal.Body>


            </Modal>
        </>
    );
};

export default UpdateModal;