import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import Project from '../components/Project';

function PageProjects() {
  const restPath = restBase + 'projects';

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
    {restData.map((project, id) => (
      <Project key={id} project={project} />
    ))}
  </>
);

}

export default PageProjects