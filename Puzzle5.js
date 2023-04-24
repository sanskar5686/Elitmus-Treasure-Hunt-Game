import React from 'react'
import { Link } from 'react-router-dom';

function Puzzle5() {
    const [correctAnswer, setcorrectAnswer] = React.useState('No One')
    const [userAnswer, setuserAnswer] = React.useState('')
    const [Message, setMessage] = React.useState('')
    const [hint,setHint] = React.useState('')
    
    const hintt = () =>{
    setMessage('Only Birds can lay eggs ')
    }
    const checkAnswer = () => {
        if (correctAnswer ===userAnswer) {
            setMessage('Congratulation you gave the write answer and won the game!! Genius :)')
        }
        else {
            setMessage('It is wrong! Try again!')
        }
    }
  return (
    <>
    <div style={{  fontSize: '5vh', backgroundColor: 'black',color:'white', fontFamily: 'verdana',
  fontSize: '300%',textAlign:'center'}}>Puzzle5<br />
    If Mrs. Smith’s rooster lays an egg in Mr. Brown’s yard, who owns the egg?
</div>
            <button  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => {
                setuserAnswer('Mrs. Smith')
                checkAnswer()
            }}>Mrs. Smith</button><br />
            <button  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}onClick={() => {
                setuserAnswer('Mr. Brown')
                checkAnswer()
            }}>Mr. Brown</button><br />

            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => {
            
                setuserAnswer('No One')
                checkAnswer()
            
            }}>No One</button><br />
             <button  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'white', color: 'white', padding: '10px', borderRadius: '5px' }}><Link to="/p4">Previous</Link></button>
            {userAnswer && 
            <p style={{fontSize:'2em',color:'white'}}>{Message}</p>}
            <button  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }}onClick={()=>{
            setuserAnswer('Hint')
            hintt()
            }}>Hint</button>
            </>
  )
}

export default Puzzle5