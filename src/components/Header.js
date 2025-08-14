import '../styles/Header.css'
import {Link} from "react-router-dom"

function Header(){
    return (
        <>
            <section id='container'>
                <div className="text">
                    <p>Hi There, Welcome To My Portfolio</p>
                </div>
                <div className="navigate">
                    <Link to="/" className='navi'>Home</Link>
                    <Link to="/" className='navi'>Meta</Link>
                    <Link to="/" className='navi'>Contact</Link>
                </div>
            </section>
        </>
    )
}

export default Header;