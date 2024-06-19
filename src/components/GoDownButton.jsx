
import { GoChevronDown } from "react-icons/go";

const GoDownButton = () => {

    const scrollToSection = () => {

        const section = document.getElementById('home-works-section');


        window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    };

    return (

            <button className='btn-arrow-down' onClick={scrollToSection}>
                <GoChevronDown />
            </button>
    );
};

export default GoDownButton;