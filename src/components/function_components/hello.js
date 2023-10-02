import { useState } from "react";

const Hello = () => {
    const [message, setMessage] = useState("안녕하세요");
    const changeMessage = () => { message === '안녕히가세요.' ? setMessage('안녕하세요') : setMessage('안녕히가세요.') };

    return (
        <div>
            <h1>{message}</h1>                
            <button onClick={changeMessage}>인사</button>
        </div>
    )
}

export default Hello;