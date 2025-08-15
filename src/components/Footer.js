import "../styles/Footer.css";

function Footer(){
    return (
        <>
            <section id="container_foot">
                <div className="info">
                    <ul className="cont cont_1">
                        <li className="title">IMPORTANT LINKS</li>
                        <ul className="list">
                            <li><a href="/">About This Website</a></li>
                            <li><a href="/">Technologies Used</a></li>
                            <li><a href="/">Developer</a></li>
                            <li><a href="/">Team Text</a></li>
                            <li><a href="/">ChangeLog</a></li>
                        </ul>
                    </ul>
                    <ul className="cont cont_2">
                        <li className="title">INFORMATION</li>
                        <ul className="list">
                            <li><a href="/">Hosting</a></li>
                            <li><a href="/">Design & Assets</a></li>
                            <li><a href="/">API's Used</a></li>
                            <li><a href="/">Inspiration</a></li>
                            <li><a href="/">Licence</a></li>
                        </ul>
                    </ul>
                </div>
                <div className="credit">
                    <p>Developed By Mubashir Ahmad &#x00A9;2025</p>
                </div>
            </section>
        </>
    )
}

export default Footer;