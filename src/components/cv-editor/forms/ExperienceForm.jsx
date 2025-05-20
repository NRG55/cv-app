export default function ExperienceForm({ formId, data, handleChange, handleDelete, handleSave, isNewForm}) {    
    return (
        <>
            <form id={formId} className="edit-form" onSubmit={(e) => handleSave(e)}>
                <div>
                    <label htmlFor="companyName">Company name <span>*</span></label>
                    <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        onChange={(event) => handleChange(formId, event)}
                        value={data.experience[formId].companyName}
                        required                                                                  
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
                <div>
                    <label htmlFor="jobLocation">Location</label>
                    <input
                        type="text"
                        name="location"
                        id="jobLocation"
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
            </form>
            <div className="edit-form-buttons-container">
                <button
                    className="edit-form-delete-button"
                    onClick={() => handleDelete(formId)}
                >
                    {isNewForm ? "CANCEL" : "DELETE"}
                </button>
                <button
                    type="submit"
                    form={formId}
                    className="edit-form-save-button"                    
                >
                    SAVE
                </button>
            </div>
        </>
    );
}