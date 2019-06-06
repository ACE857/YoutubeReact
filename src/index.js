import React from 'react';
import ReactDOM from 'react-dom';
//cretae a new component this should produce some html

const API_KEY = "AIzaSyAF8eRLR4WrvygpV0JUGhLyGK0zm32HmHc";


const App = () => {
  return <div>Hi!</div>;    // this is javascript code that is
                          // that is converted into html code by webpack and bable

}

// take this component and genrate HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
