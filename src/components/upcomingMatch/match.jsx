import React from 'react'
import './match.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

function Upcoming() {
    

    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  
    useEffect(() => {
      const targetDate = new Date('2023-12-31').getTime();
      const intervalId = setInterval(() => {
        const currentDate = new Date().getTime();
        const timeDifference = targetDate - currentDate;
  
        if (timeDifference >= 0) {
          setTimeLeft({
            days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
          });
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
  return (

    <div>
      <div className='main'>
      <Card style={{ width: '15rem'}}>
        <Card.Subtitle>{`${timeLeft.days} days, ${timeLeft.hours}hours,${timeLeft.minutes}minutes, ${timeLeft.seconds}`} seconts left</Card.Subtitle>
      <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAB5CAMAAACjkCtXAAAAkFBMVEX/mTMSiAf/////khf/4s3K3csAfgAAAIDe3uza2uoAAHr8/P7y8vjKyuGMjL7p6fKjo8rj4+7R0eVxca5OTpoAAIirq861tdV/f7Q8PJdMTJwSEohVVaJiYqRCQpavr868vNkrK4+/v9VJSZ+WlrtnZ6IeHo2VlcNubqIgIIgvL4+OjrknJ5GFhbQ1NZJXV50aV7fSAAACZklEQVR4nO2Y6W6jMBCA2enuGnwAxuHIwVFi6rRp0vd/uzXdSCt1/w5WLc2nCBMhMV9Gk8FMkhAEQRAEQRAEQRAEQRAEQRAEQRAEEQ9PUZL8jJIEooS0Q7KVdtrkxuRNutHtN9FWHeP88emU2CDCBtrZwhjbH45KHQ97f9pn+DHQtYXjfGCZENIjRMYGzh16wtG1e1a7QoMC0NqXC+jC1azHjoKsLU5s38tMgK4gy6DSIDLZ79kJOd/I2oYNmYTC5zoHpfwBVAEyG5jBjYOrPTI+Sd/0ygJyOc8yh6L0zVBOnI2ogVC1i+faaKgUCANlNc9VCUaAqkCb+rnAjISqnfNO+qVtoWwqO8+2apr1G4DseI4ZCVNbvPIWprVGGrlLz/N8TneyWatkgpa/Yv4rMbVH9uYzOzsF1jbdMo5L11gLys3+2htqdWNq37yZT6l0Rne268oy90tqnC8c4X/TDTEUorY8HStdTWMK2e5qXWvM6Oz1kIFuJ3/heJJ4sRC1ixdm/TF1vSkb09zr+u6X0vQu9V3EshfEXoKordld/z1T7qrOrK7ZsJ49rt6ZxouFqc0/pJpysyyXS9+91573rr9clqXPW1V8fFftf9m2VzXEku0vtb33tT2a8dvX9v+dpI2hk3zp27dI+vb6lBwjfEpGuieJdAfo99ssxv12pG83sb5Lxvrm/jknuUY3J3lMperoplKRzgBXopy4fhLjfHt7SDskya8oSX5HSfIjSkg7JKQdEtIOCWmHhLRDQtohIe2QkHZISDskpB0S0g4JaYeEtENC2iEh7ZCQdkhIOySkHRLSDskfFNqVGPmFFHAAAAAASUVORK5CYII=" />
      <Card.Body>
        <Card.Title>INDIA</Card.Title>
        
        <Button variant="primary">Join now</Button>
        
        <Card.Title className='away'>ENGLAND</Card.Title>
        <Card.Img variant='bottom' src='data:image/png;base64,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'></Card.Img>
    <h1>  1st price  10000rs     </h1>  
      </Card.Body>
    </Card>

   

      </div>
    </div>
  )
}      

export default  Upcoming





