import React, {useState} from 'react';
import { HiSwitchHorizontal } from 'react-icons/hi';
import Dropdown from 'react-dropdown';

const CurrencyConverter = () => {
    const [info, setInfo] = useState("2.4338");
    const [input, setInput] = useState('');
    const [from, setFrom] = useState("euro");
    const [to, setTo] = useState("by");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);
    const convert=()=> {
        let rate = info;
        setOutput(input * rate);
    }
    const test= input * info

    const flip=()=> {
        let temp = from;
        setFrom(to);
        setTo(temp);
    }

    return (
        <div>
            {/*<div className="heading">*/}
            {/*    /!*<h1>Currency converter</h1>*!/*/}
            {/*</div>*/}
            <div className="container">
                <div className="left">
                    <p>Amount</p>
                    <input type="text"
                           placeholder="Enter the amount"
                           onChange={(e) => setInput(e.target.value)} />
                </div>
                {/*<div className="middle">*/}
                {/*    <p>From</p>*/}
                {/*    <Dropdown options={options}*/}
                {/*              onChange={(e) => { setFrom(e.value) }}*/}
                {/*              value={from} placeholder="From" />*/}
                {/*</div>*/}
                {/*<div className="switch">*/}
                {/*    <HiSwitchHorizontal size="30px"*/}
                {/*                        onClick={() => { flip()}}/>*/}
                {/*</div>*/}
                {/*<div className="right">*/}
                {/*    <h3>To</h3>*/}
                {/*    <Dropdown options={options}*/}
                {/*              onChange={(e) => {setTo(e.value)}}*/}
                {/*              value={to} placeholder="To" />*/}
                {/*</div>*/}
            </div>
            <div className="result">
                <button onClick={()=>{convert()}}>Convert</button>
                {/*<h2>Converted Amount:</h2>*/}
                <p>{input+" "+from+" = "+output.toFixed(0) + " " + to}</p>
                <p>{test.toFixed(0)}</p>

            </div>

        </div>
    );
};

export default CurrencyConverter;
