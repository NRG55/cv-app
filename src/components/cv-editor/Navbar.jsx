export default function Navbar({ sections = [] }) {
    return (
        <nav>
            <ul>
               {sections.map((section) => 
                <li key={section.title}>                 
                    <button>{section.id} {section.title}</button>
                </li>
               )}
            </ul>           
        </nav>
    );
}