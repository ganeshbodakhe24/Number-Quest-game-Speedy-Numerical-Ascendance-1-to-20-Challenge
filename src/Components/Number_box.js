import { useEffect,useState } from "react";

function Number_box(props){
    const[wrongClickCss,setWrongClickCss]=useState('');
    const{value,wrongClick,checkCount}=props;
    useEffect(()=>{
        if(wrongClick==1){
            setWrongClickCss("wrongClick");
        }
        else{
            setWrongClickCss("");
        }
    })
    return(
        <>
        <div className={`${wrongClickCss} number_box` }>
            <button onClick={()=>{checkCount(value)}}>{value}</button>
        </div>
        </>
    )
}
export default Number_box;