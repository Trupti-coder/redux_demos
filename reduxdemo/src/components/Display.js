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
                    <td>{x.rollno}</td>
                    <td>{x.name}</td>
                    <td>{x.marks}</td>
                    <td><a href="">Edit</a>/<a href="">Delete</a></td>

                </tr>

            })

            }


        </table>

        </>
    );
}
export default Display;

