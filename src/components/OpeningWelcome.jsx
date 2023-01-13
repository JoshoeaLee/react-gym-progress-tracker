import {useState} from 'react'
import {Alert, Button} from 'react-bootstrap'

export default function OpeningWelcome() {

    const [showAlert, setShowAlert] = useState(true);
  return (
    <Alert show={showAlert} variant='info'>
        <Alert.Heading>Welcome to Josh's Gym Progress Tracker!</Alert.Heading>
        <p>
            This web app was built using React.js, React-Bootstrap
            and deployed using Azure services. 
            Data is stored in your browser's local storage so your 
            goals and progress towards them will stick around providing
            you aren't being cheeky on incognito mode.
            Have a play around!
        </p>
        <hr />
        <div className='d-flex justify-content-end'>
            <Button onClick={()=>setShowAlert(false)} variant='outline-info'>
                Close me!
            </Button>
        </div>
    </Alert>
  )
}
