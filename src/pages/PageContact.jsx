import { useState, useEffect } from "react";
import { restBase } from "../utilities/Utilities";
import { SocialIcon } from "react-social-icons";
import Loading from "../components/Loading";
import { appTitle } from "../global/global";

function PageContact() {
  const restPath = restBase + "pages/14";

  const [restData, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    document.title = appTitle + " | Contact";
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(restPath);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        setData(data);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [restPath]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main id="#main">
          {restData.acf && (
            <section className="contact-section">
              <article className="contact-article">
                <h3>{restData.acf.contact_title}</h3>
                <p>{restData.acf.contact_message}</p>
                <div className="social-icons">
                  <SocialIcon
                    url="mailto:kylethomsonn@gmail.com"
                    bgColor="#554EEF"
                    style={{ width: "2rem", height: "2rem" }}
                  />
                  <SocialIcon
                    url="https://www.linkedin.com/in/kylethomsonn/"
                    bgColor="#554EEF"
                    style={{ width: "2rem", height: "2rem" }}
                  />
                </div>
              </article>
            </section>
          )}
        </main>
      )}
    </>
  );
}

export default PageContact;
