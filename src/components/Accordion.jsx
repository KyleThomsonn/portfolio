import { useState } from 'react';

function MyAccordion({title, data}){

    const [showAccordion, setShowAccordion] = useState(false);

    const toggleAccordion = () => {
        setShowAccordion(!showAccordion)
    }

    return (

        <div className={`hobbies-accordion ${showAccordion ? 'open' : ''}`}>
            <header className='accordion-title' onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span>{showAccordion ? '-' : '+'}</span>
            </header>
            <div className='accordion-item-panel'>
                <ul className='accordion-item-panel'>
                    {data.map((item, index) => (
                        <li key={index}>
                            <h3>{item.hobby_name}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MyAccordion