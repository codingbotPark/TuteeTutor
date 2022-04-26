import React,{useState} from 'react';

import "./Main.css"

const Main = () => {
    
    const [mainContent, setMainContent] = useState([
        {
            id:0,
            letter:"C",
            content:"ascading"
        },{
            id:1,
            letter:"S",
            content:"tyle"
        },{
            id:2,
            letter:"S",
            content:"heet"
        }
    ])

    const [isHover,setIsHover] = useState(-1)

    function Enter(id) {
        setIsHover(-1)
        setIsHover(id)
    }
    function Leave(id){
        setIsHover(-1)
    }
 
    return (
        <div className='mainWrapper'>
            <section className='mainContainer'>
                {mainContent.map((content)=>(
                    <div key={content.id} onMouseLeave={() => Leave(content.id)}>
                        <h2 
                        className='letter'
                        onMouseEnter={() => Enter(content.id)}
                        >{content.letter}</h2>
                        <div className='border'>
                            <h2 className={isHover == content.id ? "word" : "wordEmpty"}>{content.content}</h2>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Main;