import { useDispatch, useSelector } from "react-redux";
function Display(){

    const data=(state)=>state.students;
    const studArr=useSelector(data);

    //for deletinf studentRow 
    const dispatch=useDispatch();

    

    return(
        <>
        </>
    );
}
export default Display;

