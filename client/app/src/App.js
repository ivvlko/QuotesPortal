import React from "react";
import './App.css';
import HomepageContainer from './components/containers/HomePageContainer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={ <HomepageContainer />}>
           
        </Route>
        
      </Routes>
      

   </Router>
  );
}


export default App;
