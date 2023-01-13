import { Container, Stack, Button } from "react-bootstrap";
import AddGoalPopup from "./AddGoalPopup";
import GoalCard from "./GoalCard";
import {useState} from 'react'
import { useGoals } from "../contexts/GoalContext";
import AddProgressPopup from "./AddProgressPopup";
import TotalGoalCard from "./TotalGoalCard";
import ViewProgressPopup from "./ViewProgressPopup";
import OpeningWelcome from "./OpeningWelcome";
import GitHubOffCanvas from "./GitHubOffCanvas";

export default function App() {
  const [showGoalPopup, setShowGoalPopup] = useState(false)
  const [showProgressPopup, setShowProgressPopup] = useState(false)
  const [showCanvas, setShowCanvas] = useState(false)

  const [viewTotalProgressGoalId, setViewTotalProgressGoalId] = useState()
  const [progressPopupGoalId, setProgressPopupGoalId] = useState()
  const {goals, getGoalProgress} = useGoals()

  function displayProgressPopup(goalId){
    setShowProgressPopup(true)
    setProgressPopupGoalId(goalId)
  }

  return (
    <>
      <OpeningWelcome />
      <Container className='my-4'>
        <Stack direction='horizontal' gap='3' className='mb-4'>
          <h1 className='me-auto'>Gym Progress Tracker</h1>
          <Button variant='primary' onClick={()=> setShowGoalPopup(true)}>Add Goal</Button>
          <Button variant='info' onClick={()=>setShowCanvas(true)}>Cool Bootstrap Canvas</Button>
        </Stack>
        <div 
          style={{
            display:'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '1rem', 
            alignItems: 'flex-start'}}
          >
            {goals.map(singleGoal=>{
              const progress = getGoalProgress(singleGoal.id).reduce(
                (total, progress)=>total + progress.progress, 0);
              return(
                <GoalCard
                  key={singleGoal.id}
                  title={singleGoal.title}
                  progress={progress}
                  goal={singleGoal.goal}
                  type={singleGoal.type}
                  openAddProgressClick ={()=> displayProgressPopup(singleGoal.id)}
                  onViewProgressClick ={()=> setViewTotalProgressGoalId(singleGoal.id)}
                />
              )
            })}
            <TotalGoalCard type='Push' />
            <TotalGoalCard type='Pull' />
            <TotalGoalCard type='Legs' />

        </div>
      </Container>
      <AddGoalPopup 
        show={showGoalPopup} 
        handleClose={()=>setShowGoalPopup(false)}/>
      <AddProgressPopup 
        show={showProgressPopup} 
        defaultGoalId={progressPopupGoalId}
        handleClose={()=>setShowProgressPopup(false)}/>
      <ViewProgressPopup 
        goalId={viewTotalProgressGoalId}
        handleClose={()=>setViewTotalProgressGoalId()}/>
      <GitHubOffCanvas
        show={showCanvas}
        handleClose={()=>setShowCanvas(false)}
        />
    </>

  )
}