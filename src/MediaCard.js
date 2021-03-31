import React from 'react';
import ReactDOM from 'react-dom';

function MediaCard(props){
    return(
      <div>
        <h1>{props.title}</h1>
        <p>{props.para}</p>
        <img src="https://www.piaic.org/static/media/Logo.1624cca8.svg"></img>
      </div>
    )
    
  }
  export default MediaCard