import React from 'react'
import { Link } from 'react-router-dom';

function Puzzle3() {
    const [correctAnswer, setcorrectAnswer] = React.useState('4')
    const [userAnswer, setuserAnswer] = React.useState('')
    const [Message, setMessage] = React.useState('')
    const [hint,setHint] = React.useState('')
    
    const hintt = () =>{
        setMessage('Carl and Oscar are both girls! ')
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
  fontSize: '300%',textAlign:'center'}}>Puzzle3<br />
           Carl and Oscar are siblings.
           Each of them has two sisters.
           How many children are there in the family?
</div>
            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}onClick={() => {
                setuserAnswer('6')
                checkAnswer()
            }}>6</button><br />
            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}onClick={() => {
                setuserAnswer('4')
                checkAnswer()
            }}>4</button><br />

            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => {
                setuserAnswer('8')
                checkAnswer()
            }}>8</button><br />
             <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'white', color: 'white', padding: '10px', borderRadius: '5px' }}><Link to="/p2">Previous</Link></button>
            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'white', color: 'white', padding: '10px', borderRadius: '5px' }}><Link to="/p4">Next</Link></button>
            {userAnswer && 
            <p style={{fontSize:'2em',color:'white'}}>{Message}</p>}
            <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }}onClick={()=>{
            setuserAnswer('Hint')
            hintt()
            }}>Hint</button>
            </>
  )
}

export default Puzzle3