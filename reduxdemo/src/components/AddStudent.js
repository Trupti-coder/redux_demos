import { useState } from "react";
function AddStudent(){

    let[txtrollno,setRollNo]=useState("");
    let[txtname,setName]=useState("");
    let[txtmarks,setMarks]=useState("");

    function rollnoChange(event){
        

    }
    
    function nameChange(event){

    }

    function markChange(event){

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
        <div>
            <input type="submit" value="insert"></input>
        </div>
       </form>
       </>

    );
}
export default AddStudent;