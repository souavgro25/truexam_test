import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import "./Task.css";
function Task({image, name}) {
    

    return (

        <div className="task">
            <div className="task__header">
             <div className="task__headerleft">
            <Avatar className="VideoCard__avatar" 
            alt ={name} 
            src={image}></Avatar>
            <p>{name}</p>  
            </div>  
            <div className="task__headeright">
            <a href={image} target="_blank" download="My_File.pdf"> <button className="upload__button">Download Image</button>
             </a>
            </div>
            </div>
            <div >
                <img className="task__image"src={image} alt={name}/>

            </div>
            <div className="task__footer">
                <div className="task__score">
            <p>Give score</p> <input type="number" min ="1" max="10"/>
            </div>
             
      
            <button  className="upload__button">submit score</button>
            </div>
        </div>
    )
}

export default Task
