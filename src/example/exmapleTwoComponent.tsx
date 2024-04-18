import { useState } from "react";

function ExampleTwo() {
    const  [name, setName] =useState<string>("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)

    }

    return (
        <div>
            Name :  <input placeholder="Isi sini" type="text" onChange={handleChange}/>
            <br />
            <button className="bg-yellow-100" onClick={() => alert('Hai ' + name)}>Tekan</button>
        </div>
    )


}

export default ExampleTwo