import '../styles/ProjectSec.css';
import {Route, Routes, Link} from 'react-router-dom';

function ProjectSec(){
    return (
        <>
            <section id="Project">
                <div id="P_Navbar">
                    <div className="P_heading">
                        <h2>Projects</h2>
                    </div>
                    <div className="P_navigate">
                        <Link to="/" className='NavLink'>Web-Component</Link>
                        <Link to="/" className='NavLink'>Front-End</Link>
                        <Link to="/" className='NavLink'>Full-Stack</Link>
                        <Link to="/" className='NavLink'>App-Dev</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectSec;