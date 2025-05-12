import Navbar from "./Navbar";
import PersonalInfoForm from "./PesonalInfoForm";

export default function Editor({ data }) { 
    return (
        <div className="cv-editor">
            CV Editor
            <Navbar data={data}></Navbar>
            <PersonalInfoForm />
        </div>        
    );
}