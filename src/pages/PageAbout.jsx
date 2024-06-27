import { useState, useEffect } from 'react';
import { restBase } from '../utilities/Utilities';
import MyAccordion from '../components/Accordion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import anime from 'animejs/lib/anime.es.js';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import StackIcon from 'tech-stack-icons';

function PageAbout() {
  const restPathPage = restBase + 'pages/12?acf_format=standard';

  const [restDataPage, setDataPage] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response_page = await fetch(restPathPage);
        if (!response_page.ok) {
          throw new Error('Failed to fetch data');
        }
        const restDataPage = await response_page.json();

        setDataPage(restDataPage);

        setTimeout(() => {
          setLoading(false);
        }, 1000);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData()
}, [restPathPage]);

if (error) {
  return <div>Error: {error.message}</div>;
}

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    delay: 100
  });
}, []);


const handleDesignClick = () => {
  animateDesignSkills();
  setIsClicked(true)
}

const handleDevClick = () => {
animateDevSkills();
}

const animateDesignSkills = () => {

  anime.set('.skill-item.design', {
    translateX: function() { return anime.random(0, 20); },
    rotate: function() { return anime.random(0, 360); },
  });
};

const resetAnimeProperties = () => {
  anime.set('.skill-item.design', {
    translateX: 0,
    rotate: 0,
  });
}

const animateDevSkills = () => {

  anime({
    targets: '.skill-item.dev',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 700},
      {value: 1, easing: 'easeInOutQuad', duration: 1400}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
  });
};


    return (
      <>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
      <div className='page-container'>
      {restDataPage.acf &&  (
        <div className='about-wrapper' data-aos="fade-up">
          <div className='img-wrapper'>
          <img className='portrait' src={restDataPage.acf.self_image.url} alt={restDataPage.acf.self_image.alt} />
          </div>
          <div className='about-text-wrapper'>
            <section className='about-intro'>
              <h2>{restDataPage.acf.about_title}</h2>
              <p>{restDataPage.acf.about_me_section}</p>
            </section>

            <section className='about-hobbies'> 
              <MyAccordion title={restDataPage.acf.hobbies_title}   data={restDataPage.acf.hobbies} />
            </section>

          <section className='about-skills'>
            <h3>{restDataPage.acf.design_skills_title}</h3>
            <ul>
              {restDataPage.acf.design_skills_list.map((skill, index) => (
                <li key={index} className='skill-item design' onMouseDown={handleDesignClick}>
                  <StackIcon name={`${skill}`} />
                </li>
              ))}
            </ul>
            
            {isClicked && 
            <button className='reset-btn' onMouseDown={() => {
              resetAnimeProperties();
              setIsClicked(false);
            }}>
              Reset
            </button>
            } 

            <h3>{restDataPage.acf.development_skills_title}</h3>
            <ul>
              {restDataPage.acf.development_skills_list.map((skill, index) => (
                <li key={index} className='skill-item dev' onMouseDown={handleDevClick}>
                  <StackIcon name={`${skill}`} />
                </li>
              ))}
            </ul>
            </section>
            {restDataPage.acf.cta && (
            <div className='about-projects-btn'>
              <Link to="/projects">{restDataPage.acf.cta.title}</Link>
            </div>
              )}
        </div>
        </div>
        )}
    </div>
    </main>
      )}
    </>
    )
}

export default PageAbout