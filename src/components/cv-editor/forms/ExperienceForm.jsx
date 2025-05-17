export default function ExperienceForm({ formId, data, handleChange, handleDelete, saveForm, isNewForm}) {    
    return (
        <>
            <div className="experience-form" id={formId}>
                <div>
                    <label htmlFor="companyName">Company name</label>
                    <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        onChange={(event) => handleChange(formId, event)}
                        value={data.experience[formId].companyName}                                                                  
                    />
                </div>          
                <div>
                    <label htmlFor="jobTitle">Job title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        id="jobTitle"
                        onChange={(event) => handleChange(formId, event)}
                        value={data.experience[formId].jobTitle}                 
                    />
                </div>
                <div className="school-dates">
                    <div>
                        <label htmlFor="jobStartDate">Start Date</label>
                        <input
                            type="text"
                            name="startDate"
                            id="jobStartDate"
                            onChange={(event) => handleChange(formId, event)}
                            value={data.experience[formId].startDate}                                    
                        />
                    </div>
                    <div>
                        <label htmlFor="jobEndDate">End Date</label>
                        <input
                            type="text"
                            name="endDate"
                            id="jobEndDate"
                            onChange={(event) => handleChange(formId, event)}
                            value={data.experience[formId].endDate}                       
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="jobLocation">Location</label>
                    <input
                        type="text"
                        name="location"
                        id="joblocation"
                        onChange={(event) => handleChange(formId, event)}
                        value={data.experience[formId].location}                
                    />
                </div>
                <div>
                    <label htmlFor="jobDescription">Description</label>
                    <textarea
                        type="text"
                        name="description"
                        id="jobDescription"
                        onChange={(event) => handleChange(formId, event)}
                        value={data.experience[formId].description}                
                    />
                </div>
            </div>
            <button
                onClick={() => handleDelete(formId)}
            >
                {isNewForm ? "Cancel" : "Delete"}
            </button>
            <button
                onClick={() => saveForm(formId)}
            >
                Save
            </button>
        </>
    );
}