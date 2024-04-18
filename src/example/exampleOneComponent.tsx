import {useState} from "react";

function ExampleOne() {
    const[bankAccountBalance, setBankAccountBalance] = useState<number>(100000);
    return (
    <div>
        <h1>My Bank Account Balance is {bankAccountBalance}</h1>
        <br/>
        <button className="bg-red-900" onClick={() => setBankAccountBalance(bankAccountBalance-1000)}>Minus</button>
        <br />
        <br />
        <button className ="bg-green-100" onClick={() => setBankAccountBalance(bankAccountBalance+1000000)}> Dapat Duit Euy </button>
    </div>
    )
}

export default ExampleOne