export default function SkillsForm({ data, setData}) {
    const handleSkillsChange = (value) => {       
        setData({...data, skills: value});
    };

    return (
        <div className="edit-form">
            <label htmlFor="skills">Skills</label>
            <textarea
                type="text"
                name="skills"
                id="skills"
                onChange={(e) => handleSkillsChange(e.target.value)}
                value={data.skills}            
            />           
        </div>
    );
}