import { useState } from "react";

export default function Section({ title, content }) {    
    return (
        <section>
            <div>                                 
                <h1>{title}</h1>              
            </div>
            <div>
                {content}
            </div>
        </section>
    )
}