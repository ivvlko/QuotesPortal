import React from "react";
import './App.css';
import HomepageContainer from './components/containers/HomePageContainer';
import Navigation from "./components/containers/Navigation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (

    <Router>
       <Navigation />
       
      <Routes>

        <Route path="/" element={ <HomepageContainer />}></Route>
        
      </Routes>
      

   </Router>
  );
}


export default App;
