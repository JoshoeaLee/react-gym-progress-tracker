import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';  //Bootstrap styling
import {GoalProvider} from "../contexts/GoalContext"

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoalProvider>
        <App />
    </GoalProvider>
)
