import { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function MyAccordion({title, data}){

    const [showAccordion, setShowAccordion] = useState(false);

    const toggleAccordion = () => {
        setShowAccordion(!showAccordion)
    }

    return (
        <Accordion className='hobbies-accordion' allowZeroExpanded={true}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='accordion-title' onMouseDown={toggleAccordion}>
                        {title}
                        <span>{showAccordion ? '-' : '+'}</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <ul className='accordion-item'>
                    {data.map((item, index) => (
                        <li key={index}>
                            <h3 key={index}>{item.hobby_name}</h3>
                        </li>
                    ))}
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}

export default MyAccordion