import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'

function PageContact() {
  const restPath = restBase + 'pages/14';

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
        <h3>{restData.acf.contact_title}</h3>
        <p>{restData.acf.contact_message}</p>
      </div>
    )}
    </>
  )
}

export default PageContact