
export default function ProjectsForm({ formId, data, handleChange, handleDelete, handleSave, isNewForm}) {    
    return (
        <>
            <form id={formId} className="edit-form" onSubmit={(e) => handleSave(e)}>
                <div>
                    <label htmlFor="school-name">Project Name <span>*</span></label>
                    <input                    
                        type="text"
                        name="projectName"
                        id="projectName"
                        onChange={(event) => handleChange(formId, event)}
                        value={data.projects[formId].projectName}
                        required                                                                                     
                    />
                </div> 
                <div>
                    <label htmlFor="projectDescription">Description</label>
                    <textarea
                        type="text"
                        name="description"
                        id="projectDescription"
                        onChange={(event) => handleChange(formId, event)}
                        value={data.projects[formId].description}                
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