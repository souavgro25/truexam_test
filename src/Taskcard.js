import React from 'react'
import "./TaskCard.css"
import {Link} from 'react-router-dom';

function TaskCard({image, name,submits}) {
    return (
        <div className="VideoCard">
          <img  className="VideoCard__thumbnail" src={image} alt=""/>
        <div className ="VideoCard__info">
            
            <div className="VideoCard__text">
                <h4>{name}</h4>

                <p>
                submits:{submits}
                </p>
               
            </div>
            <Link to ={`/submits/${name}`}>
            <button className="upload__button">View Submits</button>
            </Link>
          </div>
        </div>
    )
}

export default TaskCard
