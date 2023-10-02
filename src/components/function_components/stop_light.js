import { useState } from "react"

const StopLight = () => {
    const [color, setColor] = useState('');

    return (
        <div>
            <h1 style={{color}}>안녕하세요</h1>
            <button style={{ color: 'red'}} onClick={() => setColor('red')}>빨간</button>
            <button style={{ color: 'blue'}} onClick={() => setColor('blue')}>파란</button>
            <button style={{ color: 'green'}} onClick={() => setColor('green')}>초록</button>
        </div>
    )
}
export default StopLight