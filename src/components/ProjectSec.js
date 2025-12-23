import { useState } from 'react';
import '../styles/ProjectSec.css';
import DataObj from './ProjectSec_Data';

// Template
function ContentUpdate({ Img, Text, Visit, Source }) {
    return (
        <>
            <img src={Img} alt="" />

            <div className="P_Navigate-3">
                <p>{Text}</p>
                <div className="P_Nav_Links">
                    <a href={Source} className='NavLink'>Source</a>
                    <a href={Visit} className='NavLink'>Visit</a>
                </div>
            </div>
        </>
    );
}

// Data Navigation
const Links = [
    [DataObj.Web_Component.Basic, DataObj.Web_Component.Intermediate, DataObj.Web_Component.Advanced],
    [DataObj.Front_End.Basic, DataObj.Front_End.Intermediate, DataObj.Front_End.Advanced],
    [DataObj.Full_Stack.Basic, DataObj.Full_Stack.Intermediate, DataObj.Full_Stack.Advanced],
    [DataObj.App_Dev.Basic, DataObj.App_Dev.Intermediate, DataObj.App_Dev.Advanced]
];

function ProjectSec() {

    // 0 = Web Component, 1 = Front End, 2 = Full Stack, 3 = App Dev
    const [activeCategory, setActiveCategory] = useState(0);

    // 0 = Basic, 1 = Intermediate, 2 = Advanced
    const [activeLevel, setActiveLevel] = useState(0);

    const currentProject = Links[activeCategory][activeLevel];

    return (
        <section id="Project">

            <div id="P_Navbar">
                <div className="P_heading">
                    <h2>Projects</h2>
                </div>

                <div className="P_navigate">
                    <button className='NavLink' onClick={() => setActiveCategory(3)}>App Dev</button>
                    <button className='NavLink' onClick={() => setActiveCategory(0)}>Web Component</button>
                    <button className='NavLink' onClick={() => setActiveCategory(1)}>Front End</button>
                    <button className='NavLink' onClick={() => setActiveCategory(2)}>Full Stack</button>
                </div>

                <div className="P_Navigate-2">
                    <button className='NavLink' onClick={() => setActiveLevel(0)}>Basic</button>
                    <button className='NavLink' onClick={() => setActiveLevel(1)}>Intermediate</button>
                    <button className='NavLink' onClick={() => setActiveLevel(2)}>Advanced</button>
                </div>
            </div>

            <div className="P_Cntnt_Cntn">
                <ContentUpdate
                    Img={currentProject.Img}
                    Text={currentProject.Para}
                    Visit={currentProject.VisitLink}
                    Source={currentProject.SourceLink}
                />
            </div>

        </section>
    );
}

export default ProjectSec;
