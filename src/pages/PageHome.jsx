import React from 'react'
import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'

function PageHome() {
    const restPath = restBase + 'pages/9';

  const [restData, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(restPath);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData()
}, [restPath]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <>
    
    {restData.acf && (
      <div>
        <h2>{restData.acf.specialty}</h2>
        <section>
          <h2>{restData.acf.who_i_am}</h2>
          <p>{restData.acf.what_i_do}</p>
          <a href={restData.acf.cta_to_about.url}>{restData.acf.cta_to_about.title}</a>
        </section>
      </div>
      )}
    </>
  )
}

export default PageHome