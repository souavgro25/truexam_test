import React from 'react'
import "./TaskCard.css"
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Task from "./Task";
import Modal from "react-modal"

function TaskCard({task,image, name,submits}) {
    return (
      <Router>
      <div>
        <Switch>
         
       <Route path="/submits/:searchTerm/:searchTerm">
          <Modal isOpen={true}>
            <Task name={name} image={image}/>
            </Modal>
          </Route>
        
        <div className="VideoCard">
          <img  className="VideoCard__thumbnail" src={image} alt=""/>
         
        <div className ="VideoCard__info">
            <div>
        <Avatar className="VideoCard__avatar" 
            alt ={name} 
            src={image}></Avatar>
           
            
            
                 <h4>{name}</h4>
                 
                 <div className="VideoCard__text">

                <p>
                {submits}
                </p>
                </div>
            </div>
            <Link to ={`/submits/${task}/${name}`}>
            <button className="upload__button">Give Score</button>
            </Link>
          </div>
        </div>
   
      </Switch>
    </div>
    </Router>
    )
}

export default TaskCard
