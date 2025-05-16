export default function EducationForm({formId, data, handleChange, handleDelete, saveForm}) { 
    console.log(formId)  
    return (
        <>
            <div className="education-form" id={formId}>
                <div>
                    <label htmlFor="school-name">School</label>
                    <input
                        type="text"
                        name="schoolName"
                        id="school-name"
                        onChange={(event) => handleChange(formId, event)}
                        value={data.education[formId].schoolName}                                                                  
                    />
                </div>          
                <div>
                    <label htmlFor="degree">Degree</label>
                    <input
                        type="text"
                        name="degree"
                        id="degree"
                        onChange={(event) => handleChange(formId, event)}
                        value={data.education[formId].degree}                 
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
                            value={data.education[formId].startDate}                                    
                        />
                    </div>
                    <div>
                        <label htmlFor="school-end-date">End Date</label>
                        <input
                            type="text"
                            name="endDate"
                            id="school-end-date"
                            onChange={(event) => handleChange(formId, event)}
                            value={data.education[formId].endDate}                       
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
                        value={data.education[formId].location}                
                    />
                </div>
            </div>
            <button
                onClick={() => handleDelete(formId)}
            >
                Delete
            </button>
            <button
                onClick={() => saveForm(formId)}
            >
                Save
            </button>
        </>
    );
}