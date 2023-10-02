import { useState } from "react";


const OnKeyPress = () => {
    
    const [message, setMessage] = useState('');

    const getOkeyPress = (e) => {
        if (e.key !== 'Enter') return 
        alert(message);
        setMessage('');
    }

    return (
        <div>
            <h1>{message}</h1>
            <input type = 'text' onChange={(e) => setMessage(e.target.value)} value={message} onKeyPress={getOkeyPress}></input>
        </div>
    )
}

export default OnKeyPress;