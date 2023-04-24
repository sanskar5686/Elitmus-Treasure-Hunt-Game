import './File.css';
import { Link } from 'react-router-dom';

export default function File() {
    const handleClick = () => {
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.add('active-popup');
    }
    const handleClick1 = () =>{
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.add('active');
    }
    const handleClick2 = () =>{
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.remove('active');
    }

    return (
      <div className="App">

<header>  
        <h2 className="logo">Elitmus Treasure Hunt</h2>
        <nav className="navigation">
            <a >Home</a>
            <a >About</a>
            <a>Services</a>
            <a >Contact</a>
             <button className="btnLogin-popup" onClick={handleClick}>Login</button>
        </nav>  
    </header>
       <div className="wrapper">
        <span className="icon-close">
            <ion-icon name="close-outline">
            </ion-icon>
        </span> 
        <div className = "form-box login">
            <h2>Login</h2> 
            <form action="#">
               <div className="input-box">
                    <span className="icon">
                        <ion-icon name="mail-outline"></ion-icon>
                    </span>
                    <input type="email" required/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed-outline">
                    </ion-icon></span>
                    <input type="password" required/>
                    <label>Password</label>
               </div>
               <div className = "remember-forgot">
                  <label><input type="checkbox"/>Remember Me</label>
                  <a href="#">Forgot Password?</a>
               </div>
               <button style={{color: 'white'}} type="submit" className="btn" > <Link to ="/WelcomeHomePage">Login</Link> 
                </button>
               <div className="login-register">
                <p> Don't have an account? 🌗 
                    <a href="#" className="register-link" onClick= {handleClick1}>Register</a>
                </p>
               </div>
            </form>
        </div>

        <div className = "form-box register">
            <h2>Registration</h2>
            <form action="#"/>
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="mail-outline"></ion-icon>
                    </span>
                    <input type="text" required/>
                    <label>Username</label>
                   </div>
                   {/* <!-- <div> --> */}
               <div className="input-box">
                <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                <input type="email" required/>
                <label>Email</label>
               </div>
               {/* <!-- <div> --> */}
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input type="password" required/>
                    <label>Password</label>
               </div>
               <div className = "remember-forgot">
                  <label><input type="checkbox"/>I agree to terms and condition</label>
               </div>
               <button style={{color: 'white'}} type="submit" className="btn"> <Link to ="/WelcomeHomePage">Register</Link></button>
               <div className="login-register">
                <p> Already have an account?
                    <a href="#" className="login-link" onClick={handleClick2}>Login</a>
                </p>
               </div>
        </div> 
    </div> 
    </div>
    );
  }
  