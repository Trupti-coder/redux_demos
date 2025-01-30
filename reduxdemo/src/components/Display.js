import { useDispatch, useSelector } from "react-redux";
function Display(){

    const data=(state)=>state.students;
    const studArr=useSelector(data);

    //for deletinf studentRow 
    const dispatch=useDispatch();

    const deleteStudents=(rollno)=>{
        dispatch({
            type:"students/deleteStudents",
            payload:rollno,
        }),

    };

    function funcRowClick(students,event){
        event.preventDefault();
        deleteStudents(students.rollno);

    };

    return(
        <>
        </>
    );
}
export default Display;

