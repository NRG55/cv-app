import Navbar from "./Navbar";
import PersonalInfo from "./PesonalInfo";

export default function Editor({ data, setData }) { 
    return (
        <div className="cv-editor">          
            <Navbar data={data}></Navbar>
            <PersonalInfo data={data} setData={setData}/>
        </div>        
    );
}