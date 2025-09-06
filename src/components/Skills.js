import '../styles/Skills.css'
import {Routes, Route, Link } from "react-router-dom";
import Basic from './Skill_Components/BasicSkill';
import Intermediate from './Skill_Components/IntermediateSkill';
import Advanced from './Skill_Components/AdvancedSkill';


function Skills(){
    return (
        <>                                                   
            <section id='SkillContainer'>

                <div id="InfoSkill">
                    <span>
                        <span className='dot'></span>
                    </span>
                    <h2>SKILL's</h2>
                    <Link to="/" className='link_1 link'>Basic</Link>
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
                        <Route path='/' element={<Basic/>}/>
                        <Route path='inter' element={<Intermediate/>}/>
                        <Route path='adv' element={<Advanced/>}/>
                    </Routes>
                </div>

            </section>
        </>
    )
}

export default Skills;