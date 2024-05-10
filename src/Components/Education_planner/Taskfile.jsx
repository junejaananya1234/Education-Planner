function Taskfile({subject, hours}){
   return(
    <div>
       <span>{subject}</span>
       <span> - </span>
       <span>{hours}</span>
    </div>
   );
}

export default Taskfile;