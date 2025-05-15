export default function PersonalInfoForm({ data, setData}) {
    const handleInfoChange = (propertyName, value) => {
        setData({...data, 
            personalInfo: {...data.personalInfo, 
                                  [propertyName]: value}
        });
    };

    return (
        <div>        
            <div className="full-name">
                <div>
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        name="first-name"
                        id="first-name" 
                        onChange={(e) => handleInfoChange("firstName", e.target.value)}
                        value={data.personalInfo.firstName}              
                    />
                </div>
                <div>
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        onChange={(e) => handleInfoChange("lastName", e.target.value)}
                        value={data.personalInfo.lastName}                
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email-address">Email</label>
                <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={(e) => handleInfoChange("email", e.target.value)}
                    value={data.personalInfo.email}              
                />
            </div>
            <div>
                <label htmlFor="phone-number">Phone Number</label>
                <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    onChange={(e) => handleInfoChange("phoneNumber", e.target.value)}
                    value={data.personalInfo.phoneNumber}              
                />
            </div>
            <div>
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    id="location" 
                    onChange={(e) => handleInfoChange("location", e.target.value)}
                    value={data.personalInfo.location}           
                />
            </div>       
        </div>
    );
}