import React from 'react'
import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities';
import Carousel from '../components/Carousel';

function PageHome() {
    const restPath = restBase + 'pages/9';
    const restPathProjects = restBase + 'projects?acf_format=standard';

  const [restData, setData] = useState([]);
  const [restDataProjects, setDataProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(restPath);
        const response_projects = await fetch(restPathProjects);
        if (!response.ok && !response_projects.ok) {
          throw new Error('Failed to fetch data');
        }
        const restDataPage = await response.json();
        const restDataProjects = await response_projects.json();
        setData(restDataPage);
        setDataProjects(restDataProjects);
      } catch (error) {
        setError(error);
      }
    }
    fetchData()
}, [restPath, restPathProjects]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <>
    
    {restData.acf && (
      <div>
        <div className='home-content-wrapper'>

        <section className='home-intro'>
          <h2>{restData.acf.who_i_am}</h2>
          <h2 className='specialty'>{restData.acf.specialty}</h2>
          <p>{restData.acf.what_i_do}</p>
          <a href={restData.acf.cta_to_about.url}>{restData.acf.cta_to_about.title}</a>
        </section>
        </div>
          
          {restDataProjects && <Carousel data={restDataProjects} />}

      </div>
      )}
    </>
  )
}

export default PageHome