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
        </div>
    );
}