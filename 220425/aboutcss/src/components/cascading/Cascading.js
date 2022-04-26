import React,{useState} from 'react';
import "./Cascading.css"

const Cascading = () => {
    const [isHover,setIsHover] = useState(false)
    const [isHoverPlus,setIsHoverPlus] = useState(false)

    return (
        <div className='cascadingContainer'>
            <h1 className='cascadingMDN'>
                <a href="https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance" target="_blank">MDN</a>
            </h1>
            <div 
            className='cascadingSummary' 
            onMouseLeave={() => {
                setIsHover(false)
                setIsHoverPlus(false)
            }}
            >
                <h1
                onMouseEnter={() => setIsHover(true)}
                >Cascading은</h1>
                <h1 
                className={isHover || "wordEmpty"}
                onMouseEnter={() => setIsHoverPlus(true)}
                >스타일 종속, 우선순위에 관한 얘기</h1>
                <h1 className={isHoverPlus || "wordEmpty"}>솔직히 하다보면 다 이해당하는 개념임</h1>
            </div>
        </div>
    );
};

export default Cascading;