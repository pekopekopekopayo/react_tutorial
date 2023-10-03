import { useState } from "react"
const Validate = () => {
    const [message, setMessage] = useState('')
    return (
        <div>
            <input type = 'text' onChange={(e) => setMessage(e.target.value)}></input>
            <button onClick={() => validatePassword(message)}>확인</button>
        </div>
    )
}

const validatePassword = (message) => {
    console.log(message);
    message === '6291' ? alert('성공') : alert('실패');
} 


export default Validate;