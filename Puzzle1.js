import React from 'react'
import { Link } from 'react-router-dom';

function Puzzle1() {
    const [correctAnswer, setcorrectAnswer] = React.useState('Same')
    const [userAnswer, setuserAnswer] = React.useState('')
    const [Message, setMessage] = React.useState('')
    const [hint,setHint] = React.useState('')

    const hintt = () =>{
        setMessage('Does it really matters?? Haha!')
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
  fontSize: '300%',textAlign:'center' }}>Puzzle1<br />
                Which is heavier 1kg of cotton or 1kg of steel?</div>
                <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => {
    setuserAnswer('cotton')
    checkAnswer()
}}>Cotton</button><br />
           <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' ,  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => {
    setuserAnswer('Steel')
    checkAnswer()
}}>Steel</button><br />


<button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => {
    setuserAnswer('Same')
    checkAnswer()
}}>Same</button><br />
            <button style = {{ backgroundColor: 'white', color: 'white', padding: '10px', borderRadius: '5px' }}><Link to="/p2">Next</Link></button><br/>
            {userAnswer && 
            <p style={{fontSize:'2em',color:'white'}}>{Message}</p>}
            <button style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={()=>{
            setuserAnswer('Hint')
            hintt()
            }}>Hint</button>
        </>
    )
}

export default Puzzle1