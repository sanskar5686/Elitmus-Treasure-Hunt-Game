import React from 'react'
import { Link } from 'react-router-dom';

function Puzzle4() {
    const [correctAnswer, setcorrectAnswer] = React.useState('Boys')
    const [userAnswer, setuserAnswer] = React.useState('')
    const [Message, setMessage] = React.useState('')
    const [hint,setHint] = React.useState('')

    const hintt = () =>{
        setMessage('Bill is a boy! ')
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
    <div style={{ fontSize: '5vh', backgroundColor: 'black',color:'white', fontFamily: 'verdana',
  fontSize: '300%',textAlign:'center' }}>Puzzle4<br />
    BILL has as many sisters as many brothers. Are there more boys or girls in the family?
</div>
            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}onClick={() => {
                setuserAnswer('Boys')
                checkAnswer()
            }}>Boys</button><br />
            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}onClick={() => {
                setuserAnswer('Girls')
                checkAnswer()
            }}>Girls</button><br />

            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => {
                setuserAnswer('Equal')
                checkAnswer()
            }}>Equal</button><br />
             <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'white', color: 'white', padding: '10px', borderRadius: '5px' }}><Link to="/p3">Previous</Link></button>
            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'white', color: 'white', padding: '10px', borderRadius: '5px' }}><Link to="/p5">Next</Link></button>
            {userAnswer && 
            <p style={{fontSize:'2em',color:'white'}}>{Message}</p>}
            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }}onClick={()=>{
            setuserAnswer('Hint')
            hintt()
            }}>Hint</button>
            </>
  )
}

export default Puzzle4