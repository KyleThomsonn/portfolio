import { useState, useEffect } from 'react';
import { restBase } from '../utilities/Utilities';
import MyAccordion from '../components/Accordion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function PageAbout() {
  const restPathPage = restBase + 'pages/12?acf_format=standard';

  const [restDataPage, setDataPage] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response_page = await fetch(restPathPage);
        if (!response_page.ok) {
          throw new Error('Failed to fetch data');
        }
        const restDataPage = await response_page.json();
        setDataPage(restDataPage);
      } catch (error) {
        setError(error);
      }
    }
    fetchData()
}, [restPathPage]);

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    delay: 100
  });
}, []);



  if (error) {
    return <div>Error: {error.message}</div>;
  }

    return (
      <>
      {restDataPage.acf &&  (
        <div className='about-wrapper'>
          <div data-aos="fade-up" className='img-wrapper'>
          <img className='portrait' src={restDataPage.acf.self_image.url} alt={restDataPage.acf.self_image.alt} />
          </div>
          <div className='about-text-wrapper'>
            <section data-aos="fade-up" data-aos-delay="200" className='about-intro'>
              <h2>{restDataPage.acf.about_title}</h2>
              <p>{restDataPage.acf.about_me_section}</p>
            </section>

            <section data-aos="fade-up" data-aos-delay="300" className='about-hobbies'> 
              <MyAccordion title={restDataPage.acf.hobbies_title}   data={restDataPage.acf.hobbies} />
            </section>

          <section data-aos="fade-up" data-aos-delay="400" className='about-skills'>
            <h3>{restDataPage.acf.design_skills_title}</h3>
            <ul>
              {restDataPage.acf.design_skills_list.map((skill, index) => (
                <li key={index}>
                  {skill}
                </li>
              ))}
            </ul>

            <h3>{restDataPage.acf.development_skills_title}</h3>
            <ul>
              {restDataPage.acf.development_skills_list.map((skill, index) => (
                <li key={index}>
                  {skill}
                </li>
              ))}
            </ul>
            </section>
            {restDataPage.acf.cta && (
            <div className='about-projects-btn'>
              <a href={restDataPage.acf.cta.url}>{restDataPage.acf.cta.title}</a>
            </div>
              )}
        </div>
        </div>
        )}
      </>
    )
}

export default PageAbout