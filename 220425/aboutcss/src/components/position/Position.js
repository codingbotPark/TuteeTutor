import React,{useState} from 'react';

import "./Position.css"

const Position = () => {

    const [absoluteHover,setAbsoluteHover] = useState(false)
    const [fixedHover,setFixedHover] = useState(false)

    return (
        // <div className='postionContainer'>
        <div className="positionContainer">
        {/* <div className={absoluteHover ? "positionContainer absolute" :'positionContainer'}> */}
            <ul
                onMouseLeave={() => setAbsoluteHover(false)}
                className={absoluteHover && "absolute"}
            >
                <li>
                    <h1>position : static</h1>
                </li>
                <li>
                    <h1>position : relative</h1>
                </li>
                <li 
                onMouseEnter={() => setAbsoluteHover(true)}
                >
                    <h1>position : absolute</h1>
                </li>
                <li
                onMouseEnter={() => setFixedHover(true)}
                onMouseLeave={() => setFixedHover(false)}
                >
                    <h1>position : fixed</h1>
                </li>
                <li>
                    <h1>
                        <a href='https://github.com/trending' target="_blank">position : sticky</a>
                    </h1>
                </li>
            </ul>            
            {
                fixedHover &&
                <>
                <h2 className='pointNav'>이거▲</h2>
                <h2 className='pointImg'>이거▼</h2>
                </>
            }

        </div>
    );
};

export default Position;