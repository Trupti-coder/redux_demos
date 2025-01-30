import { useDispatch, useSelector } from "react-redux";
function Display(){

    const data=(state)=>state.students;
    const studArr=useSelector(data);
    
    return(
        <>
        </>
    );
}
export default Display;

