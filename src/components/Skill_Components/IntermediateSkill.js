import { useState } from 'react';

function CDis(){
    return (
        <>
            <p className="Discription">Gained strong fundamentals in C, covering control structures, arrays, functions, pointers, structures, and unions. Practiced solving basic to intermediate programming problems to build logical thinking and problem-solving ability.</p>
        </>
    )
}
function JavaDis(){
    return (
        <>
            <p className="Discription">Studied core Java concepts including OOP principles (inheritance, polymorphism, encapsulation, abstraction), error handling, and memory allocation. Applied these concepts in small projects and exercises to strengthen coding discipline.</p>
        </>
    )
}
function JsDis(){
    return (
        <>
            <p className="Discription">Proficient in JavaScript for web development, covering DOM manipulation, event handling, ES6 features, and asynchronous programming (promises, async/await). Comfortable building interactive and dynamic web applications.</p>
        </>
    )
}
function PyDis(){
    return (
        <>
            <p className="Discription">Learned Python at an introductory level, focusing on loops, functions, and essential built-in libraries. Explored scripting and small programs to understand Python’s readability and versatility.</p>            
        </>
    )
}
function DsaDis(){
    return (
        <>
            <p className="Discription">Studied and practiced core data structures including arrays, linked lists, stacks, queues, trees, and graphs. Implemented algorithms for searching, sorting, traversal, and problem-solving with hands-on coding practice.</p>
        </>
    )
}

function Intermediate(){
    const [activeSkill, setActiveSkill] = useState('c');

    const Skillcomponents = {
        c : <CDis/>,
        java : <JavaDis/>,
        js : <JsDis/>,
        py : <PyDis/>,
        dsa : <DsaDis/>
    }

    return (
        <>
            <h2 className="BasicHeading">Intermediate Skills</h2>

            <h3 className="BasicHead_2">Programmig</h3>
            <div className="Basic">
                <button onClick={() => setActiveSkill('c')}>C</button>
                <button onClick={() => setActiveSkill('java')}>JAVA</button>
                <button onClick={() => setActiveSkill('js')}>JavaScript</button>
                <button onClick={() => setActiveSkill('py')}>Python</button>
                <button onClick={() => setActiveSkill('dsa')}>DSA</button>
            </div>

            <div className="ShowMore">
                {activeSkill && Skillcomponents[activeSkill]}
            </div>
        </>
    )
}

export default Intermediate;