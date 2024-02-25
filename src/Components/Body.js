import { useEffect, useState } from "react";
import Number_box from "./Number_box";
import Timer from "./Timer";
function Body() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(1);
    const [timeup, setTimeup] = useState(0);
    const [wrongClick, setWrongClick] = useState(0);
    const [startTimer, setStartTimer] = useState(0);
    let clickSound=document.getElementById("click");
    let winSound=document.getElementById("win");
    let loseSound=document.getElementById("lose");
    function checkCount(data) {
        if (data==1 && count==1) {
            setStartTimer(1);
            setCount(count + 1);
            clickSound.play();
        }
        else if (count >= 20) {
            setTimeup(1); //time up blink
            setStartTimer(0); //stop timmer
            if(count==20) {winSound.play();}
            setCount(count+1);
         
        }
        else if (data == count) {
            setCount(count + 1);
            clickSound.play();
        }
        else {
            setWrongClick(1);
            setTimeup(1); //time up blink
            setStartTimer(0); //stop timmer
            loseSound.play();
        }
    }
    function reset() {
        let List = [];
        let random = Math.floor(Math.random() * 20);
        List.push(random);
        for (let i = 1; i < 20; i++) {
            random = Math.floor(Math.random() * 20);
            let j = 0;
            let ListLength = List.length;
            while (j < ListLength) {
                if (random == List[j]) {
                    random = ((random + 1) % 20);
                    j = -1;
                }
                j++;
                if (j == ListLength) {
                    List.push(random);
                }
            }
        }
        // console.log(List);
        setData(List);  //set new list
        setWrongClick(0);   //reset wrong click animaiton
        setCount(1);    //reset count
        setTimeup(0);  //reset timer
        setStartTimer(0);     //stop timer timer
    }
    useEffect(() => {
        reset();
    }, []);


    return (
        <>
        <audio id="click" src="click.wav"></audio>
        <audio id="win" src="win.wav"></audio> 
        <audio id="lose" src="lose.wav"></audio>
            <div className="reset_btn">
                <button onClick={reset}>Restart</button>
            </div>
            <div>
                <Timer startTimer={startTimer} timeup={timeup}></Timer>
            </div>
            <div className="body_outer_div">
                {data.map((items, index) => (
                    <Number_box key={index} wrongClick={wrongClick} value={items + 1} checkCount={checkCount}></Number_box>
                ))

                }
            </div>
        </>
    )
}
export default Body;