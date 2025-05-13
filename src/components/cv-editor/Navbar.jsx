export default function Navbar({ data }) {  
    const sections = Object.keys(data);
      
    return (
        <nav>
            <ul>
               {sections.map((element) => 
                <li key={element}>                 
                    <button> {element}</button>
                </li>
               )}
            </ul>           
        </nav>
    );
}