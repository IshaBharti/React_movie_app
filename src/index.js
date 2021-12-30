import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import data from './data'
import Nav from './Nav'
function card(val){
  return(
     
    <Card  imgsrc={val.imgsrc}
    title={val.title}
    name={val.name}
    links={val.links}/>
    
  )}

ReactDOM.render(
  <React.StrictMode>
    <Nav>
      </Nav>

 {data.map(card)};

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

