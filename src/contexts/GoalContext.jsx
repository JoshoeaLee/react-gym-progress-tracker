import React, { useContext, useState } from 'react'
import {v4 as uuidV4} from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage'

const GoalContext = React.createContext()

export function useGoals(){
    return useContext(GoalContext)
}

export function getBarVariant(progress, goal){
    const progressMade = progress/goal
    if(progressMade < .25) return 'danger';
    if(progressMade < 0.5) return 'warning';
    if(progressMade < 0.75) return 'primary';
    return 'success';
}



export const GoalProvider = ({children}) => {
    const [goals, setGoals] = useLocalStorage('goals', [])
    const [totalProgress, setTotalProgress] = useLocalStorage('totalProgress',[])
    
    function getGoalProgress(goalId){
        return totalProgress.filter(progress => progress.goalId===goalId)
    }

    function addProgress({goalId, progress, date}){
        setTotalProgress(prevProgress=>{
            return [ ...prevProgress, {id: uuidV4(), goalId, progress, date}]
        })
    }

    function addGoal({title, goal, initial, type}){
        const goalId = uuidV4()
        setGoals(prevGoals=>{
            if(prevGoals.find(goal=> goal.title===title)){
                return prevGoals
            }
            return [ ...prevGoals, {id: goalId, title, goal, type}]
        }, addProgress({
            goalId: goalId,
            progress: initial,
            date: 'Starting Weight'
        }))
   
    }

    function deleteGoal({id}){
        setGoals(prevGoals=>{
            return(
                prevGoals.filter(goal=>goal.id!==id)
            )
        })
    }

    function deleteProgress({id}){
        setTotalProgress(prevTotalProgress=>{
            return prevTotalProgress.filter(progress=>progress.id !==id)
        }) 
    }


    return (
    <GoalContext.Provider value ={{
        goals,
        totalProgress,
        getGoalProgress,
        addProgress,
        addGoal,
        deleteGoal,
        deleteProgress,
    }}>
        {children}
    </GoalContext.Provider>)
}