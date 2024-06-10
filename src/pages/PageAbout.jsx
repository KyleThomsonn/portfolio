import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'

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



  if (error) {
    return <div>Error: {error.message}</div>;
  }

    return (
      <>
      {restDataPage.acf &&  (
        <div>
          <section>
          <img className='portrait' src={restDataPage.acf.self_image.url} alt={restDataPage.acf.self_image.alt} />
            <article>
              <h2>{restDataPage.acf.about_title}</h2>
              <p>{restDataPage.acf.about_me_section}</p>
            </article>

            <h3>{restDataPage.acf.hobbies_title}</h3>
            <ul>
            {restDataPage.acf.hobbies.map((hobby, index) => (
          <li key={index}>
            <h3>{hobby.hobby_name}</h3>
          </li>
        ))}
            </ul>

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
        </div>
        )}
      </>
    )
}

export default PageAbout