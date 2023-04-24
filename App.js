import logo from './logo.svg';
import './App.css';
import File from "./File";
import { Routes, Route } from "react-router-dom";
import Puzzle1 from './Puzzle1';
import Puzzle2 from './Puzzle2';
import Puzzle3 from './Puzzle3';
import Puzzle4 from './Puzzle4';
import Puzzle5 from './Puzzle5';
import HomePage from './HomePage';


function App() {
  return (
    // <div className="App">
       <>
        <Routes>
        {" "}
        <Route path="/" Component={File} />
        <Route path="/WelcomeHomePage" Component={HomePage}/>
        <Route path="/p1" Component={Puzzle1} />   
        <Route path="/p2" Component={Puzzle2} />
        <Route path="/p3" Component={Puzzle3} />   
        <Route path="/p4" Component={Puzzle4} />  
        <Route path="/p5" Component={Puzzle5} />   
                       
      </Routes>
       </>
    // </div>
  );
}

export default App;
