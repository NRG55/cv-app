export default function Navbar({ data, setSection }) {  
    const sections = Object.keys(data);

    return (
        <nav>
            <ul>
               {sections.map((element) => 
                <li 
                    key={element}
                    onClick={() => setSection(element)}
                >                 
                    <button>{element}</button>
                </li>
               )}
            </ul>                  
        </nav>
    );
}