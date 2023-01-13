import { useGoals } from "../contexts/GoalContext"
import {Stack, Modal, Button} from 'react-bootstrap'
import {unitFormatter} from '../utils'

export default function ViewProgressPopup({goalId, handleClose}){
    const { getGoalProgress, goals, deleteGoal, deleteProgress } = useGoals()

    const goal  = goals.find(goal => goal.id===goalId)
    const totalProgress = getGoalProgress(goalId)
return (
    <Modal show={goalId !=null} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction='horizontal' gap='2'>
                        <div>Progress - {goal?.title}</div>
                        <Button 
                        variant='danger' 
                        onClick={()=>{
                            deleteGoal(goal)
                            handleClose()}}>
                        Delete</Button>
                    </Stack>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack direction='vertical' gap='4'>
                    {totalProgress.map(prog=>{
                        return(
                        <Stack direction='horizontal' gap='2' key={prog.id}>
                            <div className='me-auto fs-4'>{unitFormatter.format(prog.progress)}</div>
                            <div className='text-muted fs-6 ms-1'>{prog.date}</div>
                            <Button onClick={()=> deleteProgress(prog)} size='sm' variant='outline-danger'>&times;</Button>
                        </Stack>
                        )
                    })}
                </Stack>
            </Modal.Body>
    </Modal>
  )

}