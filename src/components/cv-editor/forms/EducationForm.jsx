export default function EducationForm({ formId, data, handleChange, handleDelete, handleSave, isNewForm}) {    
    return (
        <>
            <form id={formId} className="edit-form" onSubmit={(e) => handleSave(e)}>
                <div>
                    <label htmlFor="school-name">School Name <span>*</span></label>
                    <input                    
                        type="text"
                        name="schoolName"
                        id="school-name"
                        onChange={(event) => handleChange(formId, event)}
                        value={data.education[formId].schoolName}
                        required                                                                                     
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
            </form>
            <div className="edit-form-buttons-container">
                <button
                    className="edit-form-delete-button"
                    onClick={() => handleDelete(formId)}
                >
                    {isNewForm ? "Cancel" : "Delete"}
                </button>
                <button
                    type="submit"
                    form={formId}
                    className="edit-form-save-button"                    
                >
                    Save
                </button>
            </div>
        </>
    );
}