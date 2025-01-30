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
        <table border="2">
            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Action</th>

            </tr>
            {studArr.map(()=>{
                <tr key={x.rollno}>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td></td>

                </tr>

            })

            }


        </table>

        </>
    );
}
export default Display;

