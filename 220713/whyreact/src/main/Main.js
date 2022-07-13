import React, { useEffect, useState } from 'react';

const Main = () => {
    const [content,setContent] = useState([
    {
        title:"프레임 워크 왜 쓰냐?",
        answer:"사전같이 정적인걸 만든다? ㄹㅇ 안씀, \n하지만 요즘은 웹 어플리케이션이라 할 만큼 동적인 페이지가 많음 "
    },{
        title:"근데 왜 하필 리액트임?",
        answer:"자료많고, 사람들 많이 사용함\nVirtual DOM"
    },{
        title:"",
    }
])

    const [answer,setAnswer] = useState([])

    const [process,setProcess] = useState(0)

    function processing(){
        setAnswer(answer.concat(content[process].answer))
        setProcess(process+1)
    }

    useEffect(() => {
        console.log(answer)
    },[answer])

    return (
        <div>
        <div className='mainWrapper'>
            <h1>{content[process].title} 걍쓰지마라</h1>
            { process < content.length-1 &&
                <button onClick={() => processing()}>그래도 쓰고싶어</button>}
        </div>
        <div className='answerWrapper'>
            {
                answer.map((con,idx) => (
                    <h3 key={idx}>{con}</h3>
                ))
            }
        </div>
        </div>
    );
};

export default Main;