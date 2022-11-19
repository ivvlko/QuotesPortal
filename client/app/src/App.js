import React from "react";
import './App.css';
import HomepageContainer from './components/containers/HomePageContainer';
import Navigation from "./components/containers/Navigation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GameContainer from "./components/containers/GameContainer";
import Game from "./components/details/Game";


function App() {
  return (

    <Router>
       <Navigation />
       
      <Routes>

        <Route path="/" element={ <HomepageContainer />}></Route>
        <Route path="/play" element={ <GameContainer />}></Route>
        <Route path="/play/easy-game" element={ <Game />}></Route>
        
      </Routes>
      

   </Router>
  );
}


export default App;
