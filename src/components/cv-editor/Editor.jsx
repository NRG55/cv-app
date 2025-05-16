import { useState } from "react";
import Section from "./Section";
import Navbar from "./Navbar";
import PersonalInfoForm from "./forms/PesonalInfoForm";
import FormsList from "./FormsList";

export default function Editor({ data, setData }) { 
    const [section, setSection] = useState("personalInfo");
    const [formInfo, setFormInfo] = useState({id: null, isOpen: false, isNew: false})

    return (
        <div className="cv-editor"> 
            <Navbar data={data} setSection={setSection}/>

            {section === "personalInfo" && 
            <Section title="Personal Information" content={<PersonalInfoForm data={data} setData={setData} />} /> 
            }
            {section === "education" && 
            <Section title="Education" content={<FormsList data={data} 
                                                           setData={setData} 
                                                           section={section} 
                                                           formInfo={formInfo}
                                                           setFormInfo={setFormInfo}
                                                           />} />
            } 
        </div>        
    );
}