import "/src/styles/Editor.css"
import { useState } from "react";
import Section from "./Section";
import Navbar from "./Navbar";
import PersonalInfoForm from "./forms/PesonalInfoForm";
import FormsList from "./FormsList";
import SkillsForm from "./forms/SkillsForm";

export default function Editor({ data, setData }) { 
    const [section, setSection] = useState("personalInfo");
    const [activeForm, setActiveForm] = useState({[section]: "form-id"});    

    return (
        <div className="cv-editor"> 
            <Navbar data={data} section={section} setSection={setSection}/>

            {section === "personalInfo" && 
            <Section title="Personal Information" content={<PersonalInfoForm data={data} setData={setData} />} /> 
            }
            {section === "education" && 
            <Section title="Education" content={<FormsList data={data} 
                                                           setData={setData} 
                                                           section={section} 
                                                           activeForm={activeForm}
                                                           setActiveForm={setActiveForm}
                                                           />} />
            } 
            {section === "experience" && 
            <Section title="Work Experience" content={<FormsList data={data} 
                                                           setData={setData} 
                                                           section={section} 
                                                           activeForm={activeForm}
                                                           setActiveForm={setActiveForm}
                                                           />} />
            }
            {section === "projects" && 
            <Section title="Projects" content={<FormsList  data={data} 
                                                           setData={setData} 
                                                           section={section} 
                                                           activeForm={activeForm}
                                                           setActiveForm={setActiveForm}
                                                           />} />
            }  
           {section === "skills" && 
            <Section title="Technical Skills" content={<SkillsForm data={data} setData={setData} />} /> 
            }
        </div>        
    );
}