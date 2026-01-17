import '../styles/CertificateSec.css';

function CertificateSec(){
    return (
        <>
            
            <section id="certi_sec">
                <h1>CERTIFICATIONS</h1>
                <dec-left>
                    <span></span>
                    <span></span>
                    <span></span>
                </dec-left>

                <dec-right>
                    <span></span>
                    <span></span>
                    <span></span>
                </dec-right>
    
                <div id="navigate">
                    <h3>Courses Certificate</h3>
                    <h3><a href="/"><img src="/General_icons/home-icon.png" alt="" /></a></h3>
                    <h3>Internship Certificates</h3>
                </div>

                <div id="nestedSec">
                    <div className="dyna_heading">
                        <h3>Course Certificate</h3>
                        <span></span>
                        <img src="/Certificate_icons/Proj_icon.png" alt="" />
                        <img src="/Certificate_icons/Certificate_icon.png" alt="" />
                        <img src="/Certificate_icons/Dev_icon.png" alt="" />
                        <img src="/Certificate_icons/Inova_icon.png" alt="" />
                        <img src="/Certificate_icons/Intern_icon.png" alt="" />
                        <img src="/Certificate_icons/Lect_icon.png" alt="" />
                        <img src="/Certificate_icons/Skill_icon.png" alt="" />
                    </div>

                    <div className="dyna_content">
                        <div className='Cer_Dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolores error iure, nam optio ipsa numquam laudantium? Voluptas error accusantium et natus consequuntur, quibusdam architecto dolorem placeat vitae, doloremque numquam. Consequuntur maiores totam, eum dicta similique minima quasi vel tempora mollitia asperiores expedita iure excepturi minus! Sequi iste, voluptatem magni aut doloribus aliquid vel ipsa voluptate quisquam, reiciendis ab, maiores fugiat sit. Doloremque pariatur nam libero! Quos, accusantium molestias autem delectus aut, eveniet sequi doloremque inventore quia iure vel nesciunt veritatis voluptate tenetur. Saepe dolorem nobis harum officiis autem doloribus ipsa consectetur voluptatibus dolor, et repellat fugit suscipit, blanditiis minus.</div>
                        <div className='Cer_Img'>
                            <img src="/Intern_Certificates/Temp.jpg" alt="" />
                        </div>
                        <button>About Company</button>

                        <button>⬅️</button>
                        <button>➡️</button>
                    </div>
                </div>
                <div id="newPage">
                    <a href="/">View Certificate Gallery</a>

                    <img src="/General_Icons/certificate_icon.png" alt="" />
                    <img src="/General_Icons/certificate_icon.png" alt="" />
                    <img src="/General_Icons/certificate_icon.png" alt="" />
                    <img src="/General_Icons/certificate_icon.png" alt="" />
                    <img src="/General_Icons/certificate_icon.png" alt="" />
                    <img src="/General_Icons/certificate_icon.png" alt="" />
                    <img src="/General_Icons/certificate_icon.png" alt="" />
                    <img src="/General_Icons/certificate_icon.png" alt="" />
                </div>
            </section>


        </>
    )
};

export default CertificateSec;