import React, {useState} from 'react';
import { HiSwitchHorizontal } from 'react-icons/hi';
import Dropdown from 'react-dropdown';

const CurrencyConverter = () => {
    const [info, setInfo] = useState([]);
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);
    const convert=()=> {
        let rate = info[to];
        setOutput(input * rate);
    }
    const flip=()=> {
        let temp = from;
        setFrom(to);
        setTo(temp);
    }

    return (
        <div>
            <div className="heading">
                <h1>Currency converter</h1>
            </div>
            <div className="container">
                <div className="left">
                    <h3>Amount</h3>
                    <input type="text"
                           placeholder="Enter the amount"
                           onChange={(e) => setInput(e.target.value)} />
                </div>
                <div className="middle">
                    <h3>From</h3>
                    <Dropdown options={options}
                              onChange={(e) => { setFrom(e.value) }}
                              value={from} placeholder="From" />
                </div>
                <div className="switch">
                    <HiSwitchHorizontal size="30px"
                                        onClick={() => { flip()}}/>
                </div>
                <div className="right">
                    <h3>To</h3>
                    <Dropdown options={options}
                              onChange={(e) => {setTo(e.value)}}
                              value={to} placeholder="To" />
                </div>
            </div>
            <div className="result">
                <button onClick={()=>{convert()}}>Convert</button>
                <h2>Converted Amount:</h2>
                <p>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>

            </div>

        </div>
    );
};

export default CurrencyConverter;
