import '../styles/Skills.css'
import {Routes, Route, Link } from "react-router-dom";


function Basic(){
    return (
        <>
            <h1>Basic</h1>
        </>
    )
}
function Intermediate(){
    return (
        <>
            <h1>Intermediate</h1>
        </>
    )
}
function Advanced(){
    return (
        <>
            <h1>Advanced</h1>
        </>
    )
}

function Skills(){
    return (
        <>
            <section id='SkillContainer'>

                <div id="InfoSkill">
                    <span>
                        <span className='dot'></span>
                    </span>
                    <h2>SKILL's</h2>
                    <Link to="basic" className='link_1 link'>Basic</Link>
                    <Link to="inter" className='link_2 link'>Intermediate</Link>
                    <Link to="adv" className='link_3 link'>Advanced</Link>

                    <span>
                        <span className="dot"></span>
                    </span>
                    <span>
                        <span className="dot"></span>
                    </span>
                    <span>
                        <span className="dot"></span>
                    </span>
                </div>

                <div id="DisplayInfoSkill">
                    <Routes>
                        <Route path='basic' element={<Basic/>}/>
                        <Route path='inter' element={<Intermediate/>}/>
                        <Route path='adv' element={<Advanced/>}/>
                    </Routes>
                </div>

            </section>
        </>
    )
}

export default Skills;