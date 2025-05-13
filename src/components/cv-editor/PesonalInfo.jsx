import Section from "./Section.jsx";

export default function PersonalInfoForm({ data, setData}) {
    const handleFirstNameChange = (e) => {
        setData({...data, 
            personalInfo: {...data.personalInfo, 
                                      firstName: e.target.value}
        });
    };

    const handleLastNameChange = (e) => {
        setData({...data, 
            personalInfo: {...data.personalInfo, 
                                       lastName: e.target.value}
        });
    };

    const handleEmailChange = (e) => {
        setData({...data, 
            personalInfo: {...data.personalInfo, 
                                          email: e.target.value}
        });
    };

    const handlePhoneNumberChange = (e) => {
        setData({...data, 
            personalInfo: {...data.personalInfo, 
                                    phoneNumber: e.target.value}
        });
    };

    const handleLocationChange = (e) => {
        setData({...data, 
            personalInfo: {...data.personalInfo, 
                                       location: e.target.value}
        });
    };

    return (
        <Section title="Personal Information">        
            <div className="full-name">
                <div>
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        name="first-name"
                        id="first-name" 
                        onChange={handleFirstNameChange}             
                    />
                </div>
                <div>
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        onChange={handleLastNameChange}              
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email-address">Email</label>
                <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={handleEmailChange}             
                />
            </div>
            <div>
                <label htmlFor="phone-number">Phone Number</label>
                <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    onChange={handlePhoneNumberChange}            
                />
            </div>
            <div>
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    id="location" 
                    onChange={handleLocationChange}            
                />
            </div>       
        </Section>
    );
}