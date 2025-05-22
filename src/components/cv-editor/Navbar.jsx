export default function Navbar({ data, section, setSection }) { 
    const handleButtonClick = (sectionName) => {
        setSection(sectionName);
    };     
      
    return (
        <nav>
            <ul>
                {Object.keys(data).map((sectionName) => 
                    <li key={sectionName}>                 
                        <button 
                            key={sectionName + "-button"}
                            className={sectionName === section ? "nav-active-button" : "nav-inactive-button"}
                            onClick={() => handleButtonClick(sectionName)}
                        >
                            {sectionName === section 
                                ? <img src={`/icons/${sectionName}-red.svg`}></img> 
                                : <img src={`/icons/${sectionName}-white.svg`}></img>
                            }                          
                        </button>
                    </li>
                )}             
            </ul>                  
        </nav>
    );
}