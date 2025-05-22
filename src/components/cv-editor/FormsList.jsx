import { useState } from "react";
import { v4 as uuidv4} from "uuid";
import { initialSectionData } from "../../data";
import EducationForm from "./forms/EducationForm";
import ExperienceForm from "./forms/ExperienceForm";
import ProjectsForm from "./forms/ProjectsForm";

export default function FormsList({ section, data, setData, activeForm, setActiveForm}) { 
    const [isNewForm, setIsNewForm] = useState(false)   

    const handleFormCreate = () => {
        const newId = uuidv4();
      
        setData({
                 ...data,
                 [section]: {...data[section], 
                                      [newId]: initialSectionData(section)
                            }            
                });
        
        setIsNewForm(true);
        setActiveForm({...activeForm, [section]: newId})                                          
    };

    const handleFormDelete = (formId) => {        
        const newData = data;

        delete newData[section][formId];
        
        setData({...newData});
        setIsNewForm(false);
        setActiveForm({...activeForm, [section]: null});      
    };

    const handleFormChange = (formId, event) => {           
        setData({...data, 
                [section]: {...data[section], 
                                    [formId]: {...data[section][formId], 
                                                    [event.target.name]: event.target.value}}});                                                                    
    };
    
    const handleFormSave = (e) => { 
        e.preventDefault();
             
        setIsNewForm(false);
        setActiveForm({...activeForm, [section]: null});        
    };

    const handleFormEdit = (formId) => {         
        setActiveForm({...activeForm, [section]: formId});
    };
  
    if (activeForm[section]) {                  
        return (
            <>
                {section === "education" && (<EducationForm
                                                 formId={activeForm[section]}                                               
                                                 data={data} 
                                                 isNewForm={isNewForm}                                                                 
                                                 handleChange={handleFormChange} 
                                                 handleDelete={handleFormDelete}
                                                 handleSave={handleFormSave}        
                                            />)
                }
                {section === "experience" && (<ExperienceForm
                                                 formId={activeForm[section]}                                               
                                                 data={data} 
                                                 isNewForm={isNewForm}                                                                 
                                                 handleChange={handleFormChange} 
                                                 handleDelete={handleFormDelete}
                                                 handleSave={handleFormSave}        
                                            />)
                }
                {section === "projects" && (<ProjectsForm
                                                 formId={activeForm[section]}                                               
                                                 data={data} 
                                                 isNewForm={isNewForm}                                                                 
                                                 handleChange={handleFormChange} 
                                                 handleDelete={handleFormDelete}
                                                 handleSave={handleFormSave}        
                                            />)
                }               
            </>
        )
    };
  
    return (        
        <>
            {Object.entries(data[section]).map((element) => {
                const formId = element[0];
                const formData = element[1]; 
                          
                return ( <Form 
                            key={"form-" + formId}
                            formId={formId}                         
                            formData={formData} 
                            section={section}
                            handleEdit={handleFormEdit} 
                            handleDelete={handleFormDelete} />                 
                )
            })}
            <button
                className={"add-button"} 
                onClick={handleFormCreate}               
            >
                + Add {section}
            </button> 
        </>
    )
}

const Form = ({ formId, formData, section, handleEdit, handleDelete }) => {
    if (section === "education") {
        return (
            <div className="minimized-form">
                <button className="form-button" onClick={() => handleEdit(formId)}>
                    {formData.schoolName}
                </button>
                <button className="small-delete-button" onClick={() => handleDelete(formId)}>
                    <img src="/icons/delete.svg"></img>
                </button>
            </div>
        )
    };

    if (section === "experience") {
        return (
            <div className="minimized-form">
                <button  className="form-button" onClick={() => handleEdit(formId)}>
                    {formData.companyName}
                </button>
                <button className="small-delete-button" onClick={() => handleDelete(formId)}>
                    <img src="/icons/delete.svg"></img>
                </button>
            </div>
        )
    };

    if (section === "projects") {
        return (
            <div className="minimized-form">
                <button  className="form-button" onClick={() => handleEdit(formId)}>
                    {formData.projectName}
                </button>
                <button className="small-delete-button" onClick={() => handleDelete(formId)}>
                    <img src="/icons/delete.svg"></img>
                </button>
            </div>
        )
    };
}