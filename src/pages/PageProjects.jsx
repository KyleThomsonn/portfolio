import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'

function PageProjects() {
  const restPath = restBase + 'projects';

  const [restData, setData] = useState([]);
  const [error, setError] = useState(null);
  const [imageURL, setImageURL] = useState('');

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
      const fetchAttachment = async () => {
        if (restData.length > 0) {
          const attachmentURL = restData[0]._links['wp:attachment'][0].href;
          try {
            const response = await fetch(attachmentURL);
            if (!response.ok) {
              throw new Error('Failed to fetch attachment data');
            }
            const data = await response.json();
            setImageURL(data[0].source_url);
          } catch (error) {
            console.error('Error fetching attachment data:', error);
          }
        }
      };
  
      fetchAttachment();
    }, [restData]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {restData.length > 0 && (
        <div>
          <p>{restData[0].acf.project_description}</p>
          {imageURL && <img src={imageURL} alt="" />}
        </div>
      )}
    </>
  );
}

export default PageProjects