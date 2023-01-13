import { Form, Modal, Button } from "react-bootstrap";
import { useRef } from "react";
import { useGoals } from "../contexts/GoalContext";

export default function AddGoalPopup({show, handleClose}) {
    const titleRef = useRef()
    const goalRef = useRef()
    const typeRef = useRef()
    const initialRef = useRef()
    const {addGoal} = useGoals()

    function handleSubmit(e){
        e.preventDefault()
        addGoal({
            title: titleRef.current.value,
            goal: parseFloat(goalRef.current.value),
            initial: parseFloat(initialRef.current.value),
            type: typeRef.current.value,
        })
        handleClose()
    }

  return (
    <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>New Goal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className='mb-4' controlId='title'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control ref={titleRef} type = 'text' required/>
                </Form.Group>
                <Form.Group className='mb-4' controlId='goal'>
                    <Form.Label>Goal</Form.Label>
                    <Form.Control ref={goalRef} type = 'number' required min={0} step={0.25}/>
                </Form.Group>
                <Form.Group className='mb-4' controlId='initial'>
                    <Form.Label>Starting Weight</Form.Label>
                    <Form.Control ref={initialRef} type = 'number' required min={0} step={0.25}/>
                </Form.Group>
                <Form.Group className='mb-4' controlId='goal'> 
                    <Form.Label>Type of Workout</Form.Label>
                    <Form.Select ref={typeRef}>
                        <option value="Push">Push</option>
                        <option value="Pull">Pull</option>
                        <option value="Legs">Legs</option>
                    </Form.Select>
                </Form.Group>
                <div className='d-flex justify-content-end'>
                    <Button variant='primary' type='submit'>Add</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}
