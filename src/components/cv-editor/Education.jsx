import { v4 as uuidv4} from "uuid";
import { Fragment } from "react";
import Section from "./Section";

export default function Education({ data, setData }) {
    const createEducationForm = () => {
        const newId = uuidv4();

        setData({
                 ...data,
                education: [...data.education, 
                                {
                                id: newId,
                                schoolName: "",            
                                degree: "",
                                startDate: "",
                                endDate: "",
                                location: ""
                                }
                            ]            
                });      
    };

    const handleEducationChange = (formId, event) => {
        const { name, value } = event.target;
        const dataCopy = data;
        const form = dataCopy.education.find((form) => form.id === formId);
        
        form[name] = value;

        setData({...dataCopy});                   
    };
 
    return (
        <Section title="Education">
            {data.education.map((element) => {              
                return (
                    <EducationForm
                        key={"education-form-" + element.id}                        
                        formId={element.id}
                        data={data}
                        handleChange={handleEducationChange}                      
                    />
                )
            })}
            <button
                className="add-education-button" 
                onClick={createEducationForm}               
            >
                Add Education
            </button>
        </Section>
    );
}

function EducationForm({formId, data, handleChange}) {
    const educationInfo = data.education.find(form => form.id === formId);    

    return (
        <Fragment>
            <div className="education-form">           
                <div>
                    <label htmlFor="school-name">School</label>
                    <input
                        type="text"
                        name="schoolName"
                        id="school-name"
                        onChange={(event) => handleChange(formId, event)}
                        value={educationInfo.schoolName}                                                                  
                    />
                </div>          
                <div>
                    <label htmlFor="degree">Degree</label>
                    <input
                        type="text"
                        name="degree"
                        id="degree"
                        onChange={(event) => handleChange(formId, event)}
                        value={educationInfo.degree}                 
                    />
                </div>
                <div className="school-dates">
                    <div>
                        <label htmlFor="school-start-date">Start Date</label>
                        <input
                            type="text"
                            name="startDate"
                            id="school-start-date"
                            onChange={(event) => handleChange(formId, event)}
                            value={educationInfo.startDate}                                       
                        />
                    </div>
                    <div>
                        <label htmlFor="school-end-date">End Date</label>
                        <input
                            type="text"
                            name="endDate"
                            id="school-end-date"
                            onChange={(event) => handleChange(formId, event)}
                            value={educationInfo.endDate}                      
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="school-location">Location</label>
                    <input
                        type="text"
                        name="location"
                        id="school-location"
                        onChange={(event) => handleChange(formId, event)}
                        value={educationInfo.location}               
                    />
                </div>
            </div>
        </Fragment>
    );
}