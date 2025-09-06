import { useState } from 'react';

function HtmlDis(){
    return (
        <>
            <p className="Discription">No Data</p>
        </>
    )
}
function CssDis(){
    return (
        <>
            <p className="Discription">No Data</p>
        </>
    )
}
function BootDis(){
    return (
        <>
            <p className="Discription">No Data</p>
        </>
    )
}
function SassDis(){
    return (
        <>
            <p className="Discription">No Data</p>            
        </>
    )
}
function JsDis(){
    return (
        <>
            <p className="Discription">No Data</p>
        </>
    )
}

function Advanced(){
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
            <h2 className="BasicHeading">Advanced Skills</h2>

            <h3 className="BasicHead_2">Back-End</h3>
            <div className="Basic">
                <button onClick={() => setActiveSkill('html')}>No Data</button>
                <button onClick={() => setActiveSkill('css')}>No Data</button>
                <button onClick={() => setActiveSkill('boot')}>No Data</button>
                <button onClick={() => setActiveSkill('sass')}>No Data</button>
                <button onClick={() => setActiveSkill('js')}>No Data</button>
            </div>

            <div className="ShowMore">
                {activeSkill && Skillcomponents[activeSkill]}
            </div>
        </>
    )
}

export default Advanced;