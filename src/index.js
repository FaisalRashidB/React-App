import React from 'react';
import ReactDOM from 'react-dom';
import MediaCard from './MediaCard';
import Gate from './gate';



ReactDOM.render(
 
 <div>
   <MediaCard   
   title="PIAIC"
   para="The mission of PIAIC is to reshape Pakistan by revolutionizing education,
    research, and business by adopting latest, cutting-edge technologies.
    Experts are calling this the 4th industrial revolution. We want Pakistan
    to become a global hub for AI, data science, cloud native computing, edge
     computing, blockchain, augmented reality, and internet of things."/>,
     <Gate active={true}
           rollNumber={70550}/>

 </div>,
 
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
