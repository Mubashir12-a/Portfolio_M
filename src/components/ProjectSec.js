import '../styles/ProjectSec.css';
import {Link} from 'react-router-dom';

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
                    <div className="P_Navigate-2">
                        <Link to="/" className='NavLink'>Basic</Link>
                        <Link to="/" className='NavLink'>Intermediate</Link>
                        <Link to="/" className='NavLink'>Advanced</Link>
                    </div>
                </div>


                <div className="P_Cntnt_Cntn">
                    <img src={require(`../Assets/P_Slides/underconstruction.jpg`)} alt="" />

                    <div className="P_Navigate-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere architecto molestiae, repudiandae nostrum sit! Aliquam voluptas rem nemo saepe.</p>
                        <div className="P_Nav_Links">
                            <Link to="/" className='NavLink'>Source</Link>
                            <Link to="/" className='NavLink'>Visit</Link>
                        </div>
                    </div>

                    <Link to="/" id="SlideLeft">&#9664;</Link>
                    <Link to="/" id="SlideRight">&#9654;</Link>
                </div>
            </section>
        </>
    )
}

export default ProjectSec;