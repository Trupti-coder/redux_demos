import { useState } from "react";
function AddStudent(){

    let[txtrollno,setRollNo]=useState("");
    let[txtname,setName]=useState("");
    let[txtmarks,setMarks]=useState("");

    function rollnoChange(){

    }
    
    function nameChange(){

    }

    function markChange(){
        
    }
    
    return(
       <>
       <form>
        <div>
            RollNo:<input type="text" onChange={rollnoChange}  ></input>
        </div>
        <div>
           Name:<input type="text" onChange={nameChange} ></input> 
        </div>
        <div>
            Marks:<input type="text" onChange={markChange} ></input>
        </div>
       </form>
       </>

    );
}
export default AddStudent;