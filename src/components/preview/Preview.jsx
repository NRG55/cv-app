export default function Preview({ data }) {   
    return (
        <div className="preview">
            <section className="personal-info-preview">
                <h1>
                    {data.personalInfo.firstName} {data.personalInfo.lastName}
                </h1>
                <p>
                    {data.personalInfo.email}{" "}
                    {data.personalInfo.phoneNumber}{" "}
                    {data.personalInfo.location}
                </p>
            </section>

            <section className="education-preview">
                <h2>Education</h2>
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
                            <p>{educationData.degree}</p>
                            <p className="school-location">
                                {educationData.location}
                            </p>
                            
                        </div>
                    );
                })}
            </section>
        </div>
    );
}