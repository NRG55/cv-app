import "/src/styles/Preview.css"

export default function Preview({ data }) {   
    return (
        <div className="preview">
            <div className="a4-preview-page">
                <section className="personal-info-preview">
                    <h1>
                        {data.personalInfo.firstName} {data.personalInfo.lastName}
                    </h1>
                    <p>
                        {data.personalInfo.email}{" "}|{" "}
                        {data.personalInfo.phoneNumber}{" "}|{" "}
                        {data.personalInfo.location}
                    </p>
                </section>

                <section className="education-preview">
                    <h2>EDUCATION</h2>
                    <hr />
                    {Object.entries(data.education).map((element ) => {
                        const id = element[0];
                        const educationData = element[1];

                        return (
                            <div className="school-preview" key={"school" + id}>
                                <div>
                                    <h3>{educationData.schoolName}</h3>
                                    <p>
                                        {educationData.startDate} - {educationData.endDate}
                                    </p>
                                </div>
                                <p><i>{educationData.degree}</i></p>
                                <p className="school-location">
                                    {educationData.location}
                                </p>                            
                            </div>
                        );
                    })}
                </section>
                <section className="experience-preview">
                    <h2>WORK EXPERIENCE</h2><hr/>
                    {Object.entries(data.experience).map((element ) => {
                        const id = element[0];
                        const experienceData = element[1];

                        return (
                            <div className="job-preview" key={"job" + id}>
                                <div>
                                    <h3>{experienceData.companyName}</h3>
                                    <p>
                                        {experienceData.startDate} - {experienceData.endDate}
                                    </p>
                                </div>
                                <p><i>{experienceData.jobTitle}</i></p>
                                <p className="job-location">
                                    {experienceData.location}
                                </p> 
                                <p className="job-description">
                                    {experienceData.description}
                                </p>                             
                            </div>
                        );
                    })}
                </section>
            </div>
        </div>
    );
}