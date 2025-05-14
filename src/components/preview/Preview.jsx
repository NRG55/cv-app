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
                {data.education.map((element) => {                  
                    return (
                        <div className="school-preview" key={"school" + element.id}>
                            <div>
                                <h3>{element.schoolName}</h3>
                                <p>
                                    {element.startDate} - {element.endDate}
                                </p>
                            </div>
                            <p>{element.degree}</p>
                            <p className="school-location">
                                {element.location}
                            </p>
                            
                        </div>
                    );
                })}
            </section>
        </div>
    );
}