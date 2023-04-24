import React from 'react'
import { Link } from 'react-router-dom';


function Puzzle2() {
    const [correctAnswer, setcorrectAnswer] = React.useState('Both')
    const [userAnswer, setuserAnswer] = React.useState('')
    const [Message, setMessage] = React.useState('')
    const [hint,setHint] = React.useState('')

    const hintt = () =>{
        setMessage('This test is a test for Genius. Do not take any hint here. ')
        
        }
    const checkAnswer = () => {
        if (correctAnswer ===userAnswer) {
            setMessage('Your answer is correct! :) ')
        }
        else {
            setMessage('It is wrong! Try again!')
        }
    }
  return (
    <>
    <div style={{   display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' ,fontSize: '5vh', backgroundColor: 'black',color:'white', fontFamily: 'verdana',
  fontSize: '300%',textAlign:'center'}}>Puzzle2<br />
    What will reach the ground faster if drop an egg and watermelon from the same height?</div>
            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => {
                setuserAnswer('Egg')
                checkAnswer()
            }}>Egg</button><br />
            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => {
                setuserAnswer('Watermelon')
                checkAnswer()
            }}>Watermelon</button><br />

            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => {
                setuserAnswer('Both')
                checkAnswer()
            }}>Both</button><br />
            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'white', color: 'white', padding: '10px', borderRadius: '5px' }}><Link to="/p1">Previous</Link></button>
            <button style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'white', color: 'white', padding: '10px', borderRadius: '5px' }}><Link to="/p3">Next</Link></button>
            {userAnswer && 
            <p style={{fontSize:'2em',color: 'white'}}>{Message}</p>}
            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px'}} onClick={()=>{
            setuserAnswer('Hint')
            hintt()
            }}>Hint</button>
            </>
  )
}

export default Puzzle2