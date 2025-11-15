import { useState } from 'react';
import '../styles/ProjectSec.css';
import DataObj from './ProjectSec_Data';
import {Link, Routes, Route} from 'react-router-dom';


//Template: 
function ContentUpdate({Img, Text}){
    return (
        <>
            <img src={Img} alt="" />

            <div className="P_Navigate-3">
                <p>{Text}</p>
                <div className="P_Nav_Links">
                    <Link to="/" className='NavLink'>Source</Link>
                    <Link to="/" className='NavLink'>Visit</Link>
                </div>
            </div>
        </>
    )
}

//Data Navigation:
const Links = [
    [DataObj.Web_Component.Basic, DataObj.Web_Component.Intermediate, DataObj.Web_Component.Advanced],
    [DataObj.Front_End.Basic, DataObj.Front_End.Intermediate, DataObj.Front_End.Advanced],
    [DataObj.Full_Stack.Basic, DataObj.Full_Stack.Intermediate, DataObj.Full_Stack.Advanced],
    [DataObj.App_Dev.Basic, DataObj.App_Dev.Intermediate, DataObj.App_Dev.Advanced]
];


//Main:
function ProjectSec(){

    const [ActiveLink, setActiveLink] = useState(0);

    return (
        <>
            <section id="Project">
                <div id="P_Navbar">
                    <div className="P_heading">
                        <h2>Projects</h2>
                    </div>
                    <div className="P_navigate">
                        <Link to="" className='NavLink' onClick={() => setActiveLink(3)}>App Dev</Link>
                        <Link to="" className='NavLink' onClick={() => setActiveLink(0)}>Web Component</Link>
                        <Link to="" className='NavLink' onClick={() => setActiveLink(1)}>Front End</Link>
                        <Link to="" className='NavLink' onClick={() => setActiveLink(2)}>Full Stack</Link>
                    </div>
                    <div className="P_Navigate-2">
                        <Link to="/" className='NavLink'>Basic</Link>
                        <Link to="P_Inter" className='NavLink'>Intermediate</Link>
                        <Link to="P_Advance" className='NavLink'>Advanced</Link>
                    </div>
                </div>


                <div className="P_Cntnt_Cntn">
                    <Routes>
                        <Route path='' element={<ContentUpdate Img={Links[ActiveLink][0].Img} Text={Links[ActiveLink][0].Para} />}/>
                        <Route path='P_Inter' element={<ContentUpdate Img={Links[ActiveLink][1].Img} Text={Links[ActiveLink][1].Para} />}/>
                        <Route path='P_Advance' element={<ContentUpdate Img={Links[ActiveLink][2].Img} Text={Links[ActiveLink][2].Para} />}/>
                    </Routes>
                </div>
            </section>
        </>
    )
}

export default ProjectSec;