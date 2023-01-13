import { Form, Modal, Button } from "react-bootstrap";
import { useRef } from "react";
import { useGoals } from "../contexts/GoalContext";

export default function AddProgressPopup({show, handleClose, defaultGoalId}) {
    const dateRef = useRef()
    const progressRef = useRef()
    const goalIdRef = useRef()
    const {addProgress, totalProgress} = useGoals()
    const {goals} = useGoals()


    function handleSubmit(e){
        e.preventDefault()
        addProgress({
            goalId: goalIdRef.current.value,
            progress: parseFloat(progressRef.current.value),
            date: dateRef.current.value,
        })
        handleClose()
    }

  return (
    <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Add Progress</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className='mb-4' controlId='date'>
                    <Form.Label>Date</Form.Label>
                    <Form.Control ref={dateRef} type = 'date' required/>
                </Form.Group>
                <Form.Group className='mb-4' controlId='progress'>
                    <Form.Label>Progress</Form.Label>
                    <Form.Control ref={progressRef} type = 'number' required min={0} step={0.25}/>
                </Form.Group>
                <Form.Group className='mb-4' controlId='goalId'>
                    <Form.Label>Goal</Form.Label>
                    <Form.Select defaultValue={defaultGoalId} ref={goalIdRef}>
                        {goals.map(goal=>{
                            return(
                                <option key={goal.id} value={goal.id}>{goal.title}</option>
                            )
                        })}</Form.Select>
                </Form.Group>
                <div className='d-flex justify-content-end'>
                    <Button variant='primary' type='submit'>Add</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}
