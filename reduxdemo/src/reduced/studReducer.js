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
            }
    }

    return(
        <>
        </>
    );
}
export default studReducer;