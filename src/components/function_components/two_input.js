import { useState } from "react";

const TwoInput = () => {
    const [name, setName] = useState("");  
    const [context, setContext] = useState("");

    return (
        <div>
            <div>
                사용자명: <input type = 'text' onChange={(e) => setName(e.target.value)} value={name}></input>
            </div>
            <div>
                메세지: <input type = 'text' onChange={(e) => setContext(e.target.value)} value={context}></input>
            </div>

            <button onClick={() => {
                                    alert(`${name}: ${context}`);
                                    setName('');
                                    setContext('');
                                    }}>
            클릭
            </button>
        </div>
    )                                   
}

export default TwoInput;