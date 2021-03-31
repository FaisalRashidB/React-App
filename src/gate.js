import React from 'react'
function Gate(props){
  //  let open =props.active;
  //  function toggle(){
  //      open=!open;
  //      console.log(open)
  //  }
  const [open, toggle]=React.useState();
    return(
        <div>
            Student is <span>{open==true? 'Enroll' : 'not Enroll'}</span> 
            <button onClick={()=>toggle(!open)}>Enroll</button>

        </div>
    )
}
export default Gate;