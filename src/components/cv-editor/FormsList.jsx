import { useState } from "react";
import { v4 as uuidv4} from "uuid";
import { initialSectionData } from "../../data";
import EducationForm from "./forms/EducationForm";

export default function FormsList({ section, data, setData }) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [currentFormId, setCurrentFormId] = useState(null);
    
    const createForm = () => {
        const newId = uuidv4();
        
        setData({
                 ...data,
                 [section]: {...data[section], 
                                      [newId]: initialSectionData(section)
                            }            
                });

        setIsFormOpen(true);
        setCurrentFormId(newId);                                
    };

    const deleteForm = (formId) => {        
        const newData = data;

        delete newData[section][formId];
        setData({...newData});
        setIsFormOpen(false);
    };

    const handleFormChange = (formId, event) => {       
        setData({...data, 
                [section]: {...data[section], 
                                    [formId]: {...data[section][formId], 
                                                    [event.target.name]: event.target.value}}});                        
    };
    
    const saveForm = () => {      
        setIsFormOpen(false)
    }

    const editForm = (formId) => { 
        setCurrentFormId(formId)     
        setIsFormOpen(true)
    }

    if (isFormOpen) {       
        return (
            <>
                {section === "education" && (<EducationForm
                                                 formId={currentFormId}                                               
                                                 data={data}                                                                  
                                                 handleChange={handleFormChange} 
                                                 handleDelete={deleteForm}
                                                 saveForm={saveForm}        
                                            />)}
            </>
        )
    }

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
                            editForm={editForm} 
                            deleteForm={deleteForm} />                 
                )
            })}
            <button
                className="add-education-button" 
                onClick={createForm}               
            >
                Add Education
            </button> 
        </>
    )
}

const Form = ({ formId, formData, section, editForm }) => {
    if (section === "education") {
        return (
            <button onClick={() => editForm(formId)}>
                {formData.schoolName}
            </button>
        )
    };
}