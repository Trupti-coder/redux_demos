const initArr={
    students:[
        {
            rollno:1,name:"aaa",marks:45
        },
        {
            rollno:2,name:"bbb",marks:54
        }
    ]
}

function studReducer(stud=initArr,action){
    switch (action.type) {
        case "students/addStudent":
            return{
                ...state,
                students:[...state.students,action.payload],
            };

            //logic to delete
            case "students/deleteStudents":
            return{
                ...state,
                students:state.students.filter((stud)=>stud.roono!==action.payload),
            };

            //logic to complete a todo

            case "students/allStudents";
            return{
                ....state,
                students:state.students.map(()=>{
                    if(){

                    }
                    else{
                        
                    }
                })
            }
    }

    return(
        <>
        </>
    );
}
export default studReducer;