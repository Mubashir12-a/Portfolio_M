import { useState } from 'react';
import '../styles/Skills.css';

import Basic from './Skill_Components/BasicSkill';
import Intermediate from './Skill_Components/IntermediateSkill';
import Advanced from './Skill_Components/AdvancedSkill';

function Skills() {
    const [activeSkill, setActiveSkill] = useState('basic');

    let content = <Basic />;
    if (activeSkill === 'inter') content = <Intermediate />;
    if (activeSkill === 'adv') content = <Advanced />;

    return (
        <section id='SkillContainer'>

            <div id="InfoSkill">
                <span>
                    <span className='dot'></span>
                </span>

                <h2>SKILL's</h2>

                <button
                    className='link_1 link'
                    onClick={() => setActiveSkill('basic')}
                >
                    Basic
                </button>

                <button
                    className='link_2 link'
                    onClick={() => setActiveSkill('inter')}
                >
                    Intermediate
                </button>

                <button
                    className='link_3 link'
                    onClick={() => setActiveSkill('adv')}
                >
                    Advanced
                </button>

                <span><span className="dot"></span></span>
                <span><span className="dot"></span></span>
                <span><span className="dot"></span></span>
            </div>

            <div id="DisplayInfoSkill">
                {content}
            </div>

        </section>
    );
}

export default Skills;
