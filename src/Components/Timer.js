import React, { useState, useEffect } from 'react';

function Timer(props) {
    const { timeup, startTimer } = props;
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [timeUpCss, setTimeUpCss] = useState('');

    //    time up use effect
    useEffect(() => {
        if (timeup == 1) {
            setTimeUpCss('timeup');
        }
        else {
            setTimeUpCss('');
            setSeconds(0);
        }
    }, [timeup]);

    //start timmer
    useEffect(() => {
        let interval;
        if (startTimer == 1) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [startTimer]);

    return (
        <div>
            <div className={`${timeUpCss} timer`}>
                <p>Timer - <span className="timer_span"> {seconds}</span> </p>
            </div>
        </div>
    );
}

export default Timer;
