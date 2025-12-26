import '../styles/CertificateSec.css';

function CertificateSec(){
    return (
        <>
            
            <section id="certi_sec">
                <h1>ACHIVEMENTS</h1>
                <div id="navigate">
                    <h3>Courses Certificate</h3>
                    <h3><a href="/">Home</a></h3>
                    <h3>Internship Certificates</h3>
                </div>
                <div id="nestedSec">
                    <div className="dyna_heading">
                        <h3>Course Certificate</h3>
                        <span></span>
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                    </div>

                    <div className="dyna_content">
                        <div>Certificate Dis</div>
                        <div>Certificate img</div>
                        <div>Extra button</div>

                        <button>Left</button>
                        <button>Right</button>
                    </div>
                </div>
                <div id="newPage">
                    <a href="/">View Certificate Gallery</a>
                </div>
            </section>


        </>
    )
};

export default CertificateSec;