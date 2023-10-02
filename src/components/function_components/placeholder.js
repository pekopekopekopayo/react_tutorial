import { useState } from "react";

const Placeholder = () => {
    const [message, setMessage] = useState('1');

    return (
        <div>
            <h1>{message}</h1>
            <input type = 'text' onChange={(e) => setMessage(e.target.value)} value={message}></input>
            <button onClick={() => {
                                    alert(message);
                                    setMessage('');
                                    }}>
            클릭
            </button>
        </div>
    )
}

export default Placeholder;