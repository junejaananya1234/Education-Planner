import { useState } from "react";
import Taskfile from "./Taskfile";
import "./style.css";
function EducationPlanner(){
    const [myTasks, setMyTasks] = useState([]);
    const [subject, setSubject] = useState("");
    const [hours, setHours] = useState("");

    function handleAddTask(){
        if(!subject || !hours){
            return
        }
        const reqObj ={
            subject,
            hours,
        };

        setMyTasks([...myTasks, reqObj]);
        setSubject("");
        setHours("")
    }
    return(
        <div className="container">
            <section className="heading"><h1>Education Planner</h1></section>
           <div className="smallcontainer">
            <section className="typing"><input value={subject} type="text" placeholder="subject" onChange={(e)=>setSubject(e.target.value)} ></input></section>
            <section className="timing"><input value={hours} type="number" placeholder="hours" onChange={(e)=>setHours(e.target.value)}></input></section>
            <section className="btn"><button onClick={handleAddTask}>Add</button></section>
            </div>
            <section>
                {myTasks.map((task,index)=>(
                    <Taskfile key="index" subject={task.subject} hours={task.hours}/> 
                ))}
            </section>
        </div>
    )
}

export default EducationPlanner;