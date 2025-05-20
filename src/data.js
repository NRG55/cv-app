import { v4 as uuidv4} from "uuid";

export const data = {    
    personalInfo: {        
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        location: "",
    },
    education: {},
    experience: {},
    projects: {},
    skills: ""    
};

export const initialSectionData = (section) => {
    switch (section) {
      case "education":
        return {
                schoolName: "",            
                degree: "",
                startDate: "",
                endDate: "",
                location: "",
                }
      case "experience":
        return {          
                companyName: '',
                jobTitle: '',
                startDate: '',
                endDate: '',
                location: '',
                description: '',
                }; 
      case "projects":
        return {          
                projectName: '',                
                description: '',
                };    

        default:
            
          return null;
    };
};

export const initData = {    
    personalInfo: {        
        firstName: "John",
        lastName: "Somebody",
        email: "johnsomebody@provider.com",
        phoneNumber: "(086) 4365 370",
        location: "Country, City",
    },
    education: {[uuidv4()]: {
                              schoolName: "University of Random City",
                              degree: "Bachelor of Science",
                              startDate: "Sep 2002",
                              endDate: "July 2007",
                              location: "Country, City",
                            },                             
                [uuidv4()]: {
                              schoolName: "Institute of Random City",
                              degree: "Bachelor of Arts",
                              startDate: "Sep 2010",
                              endDate: "July 2015",
                              location: "Country, City",
                            }
                },
    experience: {[uuidv4()]: {
                              companyName: "Company Name",
                              jobTitle: "Manager",
                              startDate: "Sep 2011",
                              endDate: "July 20016",
                              location: "Country, City",
                              description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos, ullam repellat magnam cupiditate, explicabo dolore perferendis est placeat expedita dolores ipsum et deserunt dolor! Numquam magni eveniet voluptatibus saepe. Deleniti aut quos quas rem sapiente ut reiciendis incidunt fugit."
                              },                             
                  [uuidv4()]: {
                              companyName: "Company Name Two",
                              jobTitle: "Administrator",
                              startDate: "Sep 2016",
                              endDate: "July 2024",
                              location: "Country, City",
                              description: "Consequuntur, perspiciatis beatae provident blanditiis officiis iste recusandae nam itaque exercitationem laborum asperiores porro ipsum. Dolores illum ab blanditiis libero, sunt neque labore, facilis in tempora voluptas eum laboriosam, omnis."
                              }
                 },
    projects: {[uuidv4()]: {
                              projectName: "Project One",                             
                              description: "ipsum dolor sit amet consectetur autem. ipsum dolor sit amet consectetur adipisicing elit. Doloribus quia sit iusto veritatis saepe esse enim maiores autem. Tempore, sed. Tempore, sedorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos, ullam repellat magnam cupiditate, explicabo dolore perferendis est placeat expedita dolores ipsum et deserunt dolor! Numquam magni eveniet voluptatibus saepe. Deleniti aut quos quas rem sapiente ut reiciendis incidunt fugit."
                            },                             
               [uuidv4()]: {
                              projectName: "Project Two",                             
                              description: "Consequuntur, perspiciatis beatae provident blanditiis officiis iste recusandae nam itaque exercitationem laborum asperiores porro ipsum. Dolores illum ab blanditiis libero, sunt neque labore, facilis in tempora voluptas eum laboriosam, omnis.Quod quos, ullam repellat magnam cupiditate, explicabo"
                            }
                  },
    skills: "JavaScript, HTML, CSS, Webpack, React, Node.js"    
};
  