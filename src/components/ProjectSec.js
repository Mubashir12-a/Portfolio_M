import '../styles/ProjectSec.css';
import {Route, Routes, Link} from 'react-router-dom';

function ProjectSec(){
    return (
        <>
            <section id="Project">
                <div id="P_btns">
                    <Link to='/' className='P_btn'>Fun</Link>
                    <Link to='/' className='P_btn'>Components</Link>
                    <Link to='/' className='P_btn'>Inspired</Link>
                    <Link to='/' className='P_btn'>Serious</Link>
                    <Link to='/' className='P_btn'>Professional</Link>
                    <span className="lineThrough"></span>
                </div>
                <div id="P_btnCntnt">
                    <Routes>
                        <Route path='/' element />
                        <Route path='/' element />
                        <Route path='/' element />
                        <Route path='/' element />
                        <Route path='/' element />
                    </Routes>
                </div>
            </section>
        </>
    )
}

export default ProjectSec;