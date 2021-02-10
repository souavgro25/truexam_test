import React, { useEffect } from "react";
import {db,app} from "./Firebase";
import Task from "./Task";
import TaskCard from "./Taskcard";
import "./Upload.css";


function App() {
  const [fileUrl, setFileUrl] = React.useState(null);
  const [Tasks, setTasks] = React.useState([]);
  const[Taskname,setTaskName]=React.useState("");
  const[TaskDesc,setTaskDesc]=React.useState("");


  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (!Taskname || !fileUrl) {
      return;
    }
    await db.collection("Tasks").doc(Taskname).set({
      name: Taskname,
      image: fileUrl,
      Desc : TaskDesc,
      
      
    }
  
    );
    alert("task added")
    setFileUrl("");
    setTaskDesc("");
    setTaskName("");
    };
   
  

  useEffect(() => {
    
    const fetchTasks = async () => {
      const usersCollection = await db.collection("Tasks").get();
      setTasks(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchTasks();
   
  },[]);

  return (
    <div className="upload">
         <p className="title">Add Tasks</p>      
        <div className="upload__Task">
      <form onSubmit={onSubmit} id="Taskform">
        <input  className= "upload__file"type="file"  id ="file"onChange={onFileChange} />
        <label htmlFor="file" >choose image</label>
        <input type="text" name="Taskname" placeholder="NAME"  onChange ={e => setTaskName(e.target.value)} />
      
        <button className="upload__button">Upload</button>
        
      </form>
      <textarea class="Task__Desc" name="description" placeholder="Description of Task" form="Taskform"
      
       onChange ={e => setTaskDesc(e.target.value)}></textarea>
       </div>
       <p className="title">previous Uploaded Task</p>
     <div className="upload__previous">
         <div className="previous__Task">
        {Tasks.map(({name,Desc,image,timeStamp}) => (
          <TaskCard 
          image ={image} 
          name={name} 
          key ={name}
          views={50}
         
          submits={35}/>
        ))}

        <TaskCard 
        image ="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
        name="Task1" 
        key = "1"
        views={50}
        submits="35"
        />
        
        <TaskCard 
        image ="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
        name="Task2" 
        key = "3"
        views={50}
        submits="25"
        />
        <TaskCard 
        image ="https://images.unsplash.com/photo-1486916856992-e4db22c8df33?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=667&q=80" 
        name="Task3" 
        key = "2"
        views={50}
        submits="45"
        />
        <TaskCard 
        image ="https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=792&q=80" 
        name="Task14" 
        key = "4"
        views={50}
        submits="30"
        />
        </div>
      </div>
    </div>
  );
}

export default App;