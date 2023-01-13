import { useGoals } from "../contexts/GoalContext"
import GoalCard from "./GoalCard"


export default function TotalGoalCard({type}) {

    const {goals, getGoalProgress} = useGoals()


    if(type==='Push'){
        const pushGoals = goals.filter(goal=>goal.type==='Push')
        const pushTotalGoal = pushGoals.reduce(
            (total, progress) => total + progress.goal, 0
        )
        if(pushTotalGoal===0) return null

        //So each 'Goal' has an array of 'Progress' objects associated with it
        //This array holds these arrays
        const pushProgresses = pushGoals.map(goal=> getGoalProgress(goal.id))
        //Flatten the array 
        const flatPushProgresses = [].concat(...pushProgresses)

        const pushTotalProgress = flatPushProgresses.reduce(
            (total, progress) => total + progress.progress, 0
        )

        return <GoalCard progress={pushTotalProgress} title='Push Progress' goal={pushTotalGoal} totalProg/>
    }
    else if(type==='Pull'){
        const pullGoals = goals.filter(goal=>goal.type==='Pull')
        const pullTotalGoal = pullGoals.reduce(
            (total, progress) => total + progress.goal, 0
        )
        if(pullTotalGoal===0) return null

        const pullProgresses = pullGoals.map(goal=> getGoalProgress(goal.id))
        const flatPullProgresses = [].concat(...pullProgresses)

        const pullTotalProgress = flatPullProgresses.reduce(
            (total, progress) => total + progress.progress, 0
        )

        return <GoalCard progress={pullTotalProgress} title='Pull Progress' goal={pullTotalGoal} totalProg/>
    }
    else if(type==='Legs'){
        const legsGoals = goals.filter(goal=>goal.type==='Legs')
        const legsTotalGoal = legsGoals.reduce(
            (total, progress) => total + progress.goal, 0
        )
        if(legsTotalGoal===0) return null

        const legsProgresses = legsGoals.map(goal=> getGoalProgress(goal.id))
        const flatLegProgresses = [].concat(...legsProgresses)

        const legsTotalProgress  = flatLegProgresses.reduce(
            (total, progress) => total + progress.progress, 0
        )

        return <GoalCard progress={legsTotalProgress } title='Legs Progress' goal={legsTotalGoal} totalProg/>
    }
  

  return (
    <div>Error</div>
  )
}
