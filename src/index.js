import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import data from './data'
import Nav from './Nav'
// with function
// function card(val){
//   return(
//     //  in val there is data  of array 
//     <Card  imgsrc={val.imgsrc}
//     title={val.title}
//     name={val.name}
//     links={val.links}/>
    
//   )}

ReactDOM.render(
  <React.StrictMode>
    <Nav>
      </Nav>
{/* for maping the array data */}
{/* with function */}
 {/* {data.map(function card(val){ */}
 {/* with fat arrow function */}
 {data.map( (val)=>{

   return  (<Card  imgsrc={val.imgsrc}
      title={val.title}
       name={val.name}
       links={val.links}/>
       
     );
    })}


    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

