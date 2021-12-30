import './App.css';

function Card(props) {
  return (
  
   <>
   
  <div className='cards'>
      <div className='card'>
        <img src={props.imgsrc}       alt="mypic" 
       className="card_info"></img>
       <div className='card_category'>{props.title}
       <h3 className='card_tittle'>{props.name}
         </h3>
         <a href={props.links}
         target="_blank">
           
           <button>watch Now</button>
           </a>
           </div>
           </div>

        </div>
        
  </>
  
  )
};


export default Card;
