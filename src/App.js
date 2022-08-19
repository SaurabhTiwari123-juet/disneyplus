import React from 'react';
import './App.css';
import Header from './components/Header' 
import Home from './components/Home' 
//import Detail from './components/Detail'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    </div>
  );
}



      /* <Home/>}/* <Router>
       <Header />
       <Routes>
        <Route path="/detail">
        <Detail />
        </Route>
        <Route path="/">
        <Home/>
        </Route> *///</Routes>
      //</div> </Routes>
  //  </Router> */}
 
export default App;
