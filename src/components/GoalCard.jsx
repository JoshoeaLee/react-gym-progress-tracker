import {Card, ProgressBar, Stack, Button} from 'react-bootstrap';
import { unitFormatter } from '../utils';
import { getBarVariant } from '../contexts/GoalContext';

export default function GoalCard({title, type, progress, goal, totalProg, openAddProgressClick, onViewProgressClick}) {

    const cardBackgroundSettings = []
    if(progress>=goal)
        cardBackgroundSettings.push('bg-success', 'bg-opacity-10')
    if(totalProg)
        cardBackgroundSettings.push('bg-info', 'bg-opacity-10')
        
  
    return (
    <div>
        <Card className={cardBackgroundSettings.join(' ')}>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between 
                align-items-baseline fw-normal mb-3'>
                    <div className='me-2'>{title} <span className='text-muted fs-6 ms-1'>{type}</span></div>
                    <div className='d-flex align-items-baseline'>
                        {unitFormatter.format(progress)}
                        <span className='text-muted fs-6 ms-1'>/ {unitFormatter.format(goal)}</span> 
                    </div>
                </Card.Title>
                <ProgressBar 
                    className='rounded-pill' 
                    striped animated variant={getBarVariant(progress, goal)}
                    min={0}
                    max={goal}
                    now={progress}
                />
                {!totalProg && <Stack direction='horizontal' gap='3' className='mt-4'>
                    <Button variant='outline-primary' className='ms-auto' onClick={openAddProgressClick}>Add Progress</Button>
                    <Button variant='outline-secondary' className='ms-auto' onClick={onViewProgressClick}>View Progress History</Button>
                </Stack>}
            </Card.Body>
        </Card>
    </div>
  )
}