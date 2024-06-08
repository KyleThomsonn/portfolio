import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'

function PageAbout() {
  const restPath = restBase + 'pages/12';

  const [restData, setData] = useState([]);
  const [error, setError] = useState(null);
  const [image, setImage] = useState('');

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

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(restData._links['wp:attachment'][0].href);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setImage(data[0]);
      } catch (error) {
        setError(error);
      }
    };
    if (restData._links && restData._links['wp:attachment']) {
      fetchImage();
    }

  }, [restData])

  if (error) {
    return <div>Error: {error.message}</div>;
  }

    return (
      <>
      {restData.acf &&  (
        <div>
          <section>
          {image && <img className='portrait' src={image.source_url} alt={image.alt_text} />}
            <article>
              <h2>{restData.acf.about_title}</h2>
              <p>{restData.acf.about_me_section}</p>
            </article>

            <h3>{restData.acf.hobbies_title}</h3>
            <ul>
            {restData.acf.hobbies.map((hobby, index) => (
          <li key={index}>
            <h3>{hobby.hobby_name}</h3>
          </li>
        ))}
            </ul>

            <h3>{restData.acf.design_skills_title}</h3>
            <ul>
              {restData.acf.design_skills_list.map((skill, index) => (
                <li key={index}>
                  {skill}
                </li>
              ))}
            </ul>

            <h3>{restData.acf.development_skills_title}</h3>
            <ul>
              {restData.acf.development_skills_list.map((skill, index) => (
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