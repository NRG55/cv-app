import { v4 as uuidv4} from "uuid";
import { initialSectionData } from "../../data";
import EducationForm from "./forms/EducationForm";

export default function FormsList({ section, data, setData, formInfo, setFormInfo }) {     
    const createForm = () => {
        const newId = uuidv4();
        
        setData({
                 ...data,
                 [section]: {...data[section], 
                                      [newId]: initialSectionData(section)
                            }            
                });
        
        setFormInfo({id: newId, isOpen: true, isNew: true}) 
        console.log(formInfo)                            
    };

    const deleteForm = (formId) => {        
        const newData = data;

        delete newData[section][formId];
        setData({...newData});
        setFormInfo({...formInfo, isOpen: false, isNew: false});      
    };

    const handleFormChange = (formId, event) => {       
        setData({...data, 
                [section]: {...data[section], 
                                    [formId]: {...data[section][formId], 
                                                    [event.target.name]: event.target.value}}});                        
    };
    
    const saveForm = () => {
        setFormInfo({...formInfo, isOpen: false, isNew: false});        
    };

    const editForm = (formId) => { 
        setFormInfo({...formInfo, id: formId, isOpen: true});       
    }

    if (formInfo.isOpen) {            
        return (
            <>
                {section === "education" && (<EducationForm
                                                 formId={formInfo.id}                                               
                                                 data={data} 
                                                 isNewForm={formInfo.isNew}                                                                 
                                                 handleChange={handleFormChange} 
                                                 handleDelete={deleteForm}
                                                 saveForm={saveForm}        
                                            />)}
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