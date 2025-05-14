import { useState } from 'react';
import PersonalInfo from "./PesonalInfo";
import Education from "./Education";
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Navbar from "./Navbar";

export default function Editor({ data, setData }) {
    const [section, setSection] = useState("personalInfo"); 

    return (
        <div className="cv-editor">          
            <Navbar data={data} setSection={setSection}/>
            
            {section === "personalInfo" && 
            <PersonalInfo data={data} setData={setData}/>
            } 
            {section === "education" && 
            <Education data={data} setData={setData}/>
            }
            {section === "experience" && 
            <Experience data={data} setData={setData}/>
            }
            {section === "projects" && 
            <Projects data={data} setData={setData}/>
            } 
            {section === "skills" && 
            <Skills data={data} setData={setData}/>
            }    
        </div>        
    );
}