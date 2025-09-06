import { useState } from 'react';

function HtmlDis(){
    return (
        <>
            <p className="Discription">I have advanced knowledge of HTML, with professional-level mastery of structuring and organizing content for the web. My experience goes beyond basic tags—I focus on creating semantic, accessible, and scalable markup that forms the foundation of clean, maintainable front-end projects. From building responsive layouts to ensuring proper SEO-friendly structure, I treat HTML as the backbone of modern web development.</p>
        </>
    )
}
function CssDis(){
    return (
        <>
            <p className="Discription">I have strong command over CSS, including modern layout systems like Flexbox and CSS Grid to build fully responsive and adaptive designs. My skills extend from classic styling techniques to experimenting with new and beta CSS features, ensuring my work aligns with cutting-edge standards. I focus on writing clean, reusable styles that balance performance, accessibility, and visual appeal, while making sure designs look consistent across devices and browsers.</p>
        </>
    )
}
function BootDis(){
    return (
        <>
            <p className="Discription">I have hands-on experience with Bootstrap, leveraging its responsive grid system and prebuilt components to speed up development. While my core strength lies in writing custom HTML and CSS, I use Bootstrap effectively when projects require quick prototyping, standardized UI elements, or compatibility across devices.</p>
        </>
    )
}
function SassDis(){
    return (
        <>
            <p className="Discription">I have working knowledge of Sass, using it to write more maintainable and scalable stylesheets. I’m comfortable with features like variables, nesting, mixins, and partials, which help streamline styling and keep code organized. Sass adds efficiency to my CSS workflow while making it easier to manage larger projects.</p>            
        </>
    )
}
function JsDis(){
    return (
        <>
            <p className="Discription">I have a strong grasp of JavaScript fundamentals up to advanced concepts like Promises, with practical experience in building logic-heavy solutions. My background in Java, C, Python, and Data Structures & Algorithms gives me a deeper problem-solving approach, which I apply effectively in JavaScript projects. I’m comfortable with ES6+ features such as arrow functions, template literals, destructuring, and modular code, allowing me to write cleaner and more efficient scripts for dynamic front-end functionality.</p>
        </>
    )
}

function Basic(){
    const [activeSkill, setActiveSkill] = useState('html');

    const Skillcomponents = {
        html : <HtmlDis/>,
        css : <CssDis/>,
        boot : <BootDis/>,
        sass : <SassDis/>,
        js : <JsDis/>
    }

    return (
        <>
            <h2 className="BasicHeading">Basic Skills</h2>

            <h3 className="BasicHead_2">Frontend-WebDev</h3>
            <div className="Basic">
                <button onClick={() => setActiveSkill('html')}>HTML</button>
                <button onClick={() => setActiveSkill('css')}>CSS</button>
                <button onClick={() => setActiveSkill('boot')}>Bootstrap</button>
                <button onClick={() => setActiveSkill('sass')}>SASS</button>
                <button onClick={() => setActiveSkill('js')}>JavaScript</button>
            </div>

            <div className="ShowMore">
                {activeSkill && Skillcomponents[activeSkill]}
            </div>
        </>
    )
}

export default Basic;