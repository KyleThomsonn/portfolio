import Collapse from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function MyAccordion({title, data}){
    return (
        <Accordion className='hobbies-accordion' allowZeroExpanded={true}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='accordion-title'>
                        {title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                {data.map((item, index) => (
                <h3 key={index}>{item.hobby_name}</h3>
                ))}
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}

export default MyAccordion