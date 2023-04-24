import React from 'react'
import { Link } from 'react-router-dom';



function HomePage() {
  return (
    <>

    <div color='white'><p style={{fontSize : '38px'}}><p style={{color : 'White'}}><p style={{backgroundColor : 'Black'}}><b>$ Welcome to Elitmus Treasure Hunt game $</b></p></p></p><br/>
    <p style={{fontSize : '30px'}}><p style={{color : 'White'}}><p style={{backgroundColor : 'Black'}}><i>The game has following instructions to be followed --</i></p></p> </p><br/>
    <p style={{fontSize : '25px'}}><p style={{color : 'White'}}><p style={{backgroundColor : 'Black'}}><i> 1. This game has 5 questions. <br/>
         2.    This game has 1 correct answer to each particular question  <br/>
         3.    You can navigate to each question <br/>
         4.    There is 2 dead-ends <br/>
       **5. To measure the soft-skill and confidence level of our user you have to double check your answer.**<br/>
         6.    All the best!</i></p> </p></p> <br/>
    </div>
    <div style={{textAlign: 'center',    
width: '300px',  
height: '200px' }}>
    <button style={{display: 'inlineBlock',
        backgroundColor: 'white',
        padding: '20px' ,
        width: '200px',
        color: '#ffffff',
        fontSize: '20px',
        textAlign: 'center'}}> <Link to="/p1">Start the game</Link></button>
        </div>
    </>
  )
}

export default HomePage