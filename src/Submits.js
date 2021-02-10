import React from 'react'
import SubmitTask from "./SubmitTask";

function submits() {
    return (
        <div>
         <div className="upload__previous">
         <div className="previous__Task">
        <SubmitTask 
        image ="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
        name="nikhil" 
        key = "1"
        submits="1 hour ago"
        task="task1"
        />
        <SubmitTask 
        image ="https://images.unsplash.com/photo-1505739998589-00fc191ce01d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHBob3RvZ3JhcGh5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
        name="sourabh" 
        key = "1"
        submits="2 hour ago "
        task="task1"
        />
        <SubmitTask 
        image ="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
        name="sumit" 
        key = "3"
        submits="2 hour ago"
        task="task1"
        />
        <SubmitTask  
        image ="https://images.unsplash.com/photo-1486916856992-e4db22c8df33?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=667&q=80" 
        name="shubham" 
        key = "2"
        submits="20 min ago"
        task="task1"
        />
        
        </div></div>
        </div>
    )
}

export default submits
