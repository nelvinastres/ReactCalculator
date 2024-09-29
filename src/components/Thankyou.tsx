import React, { useState } from 'react';
import './Thankyou.css';

function Thankyou() {
    const [num, setNum] = useState<string>("");
    const [flag, setFlag] = useState<boolean>(true);
    
    const randNum = (min:number, max:number) => {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function getRandNum() {
        let temp = randNum(1, 9999);
        if(temp>=1&&temp<10&&flag===true) {
            setNum("000".concat(temp.toString()));
            // return num;
        } else if(temp>10&&temp<100&&flag===true) {
            setNum("00".concat(temp.toString()));
            // return num;
        } else if(temp>100&&temp<1000&&flag===true) {
            setNum("0".concat(temp.toString()));
            // return num;
        } else if(flag===true){
            setNum(temp.toString());
            // return num;
        }
        setFlag(false);
    }

    return (
        // Math.floor(Math.random()*(9999-1+1)+1).toString().length<4?Math.floor(Math.random()*(9999-1+1)+1).toString().padStart(4-(Math.floor(Math.random()*(9999-1+1)+1).toString().length), '0'):Math.floor(Math.random()*(9999-1+1)+1).toString()
        <div className="thankyou" onMouseEnter={getRandNum}>
            <h1>Support Ticket Form</h1>
            <h2>Thank you for sending us your report, we will track the problem now</h2>
            <p>ticket number: {num}</p>
        </div>
        
    );
}

export default Thankyou;