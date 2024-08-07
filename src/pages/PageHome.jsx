import React from "react";
import { useState, useEffect } from "react";
import { restBase } from "../utilities/Utilities";
import Carousel from "../components/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import GoDownButton from "../components/GoDownButton";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { appTitle } from "../global/global";
import { Helmet, HelmetProvider } from "react-helmet-async";

function PageHome() {
  const restPath = restBase + "pages/9";
  const restPathProjects = restBase + "projects?acf_format=standard";

  const [restData, setData] = useState([]);
  const [restDataProjects, setDataProjects] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    document.title = appTitle;
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(restPath);
        const response_projects = await fetch(restPathProjects);
        if (!response.ok && !response_projects.ok) {
          throw new Error("Failed to fetch data");
        }
        const restDataPage = await response.json();
        const restDataProjects = await response_projects.json();

        setData(restDataPage);
        setDataProjects(restDataProjects);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [restPath, restPathProjects]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      delay: 100,
    });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <HelmetProvider>
    <>

      <Helmet>
        <meta name="description" content={restData.acf && restData.acf.seo_meta_description} />
      </Helmet>
      
    {isLoading ? (
      <Loading />
      ) : (
        <main id="#main">
          {restData.acf && (
            <div>
              <div className="home-content-wrapper">
                <section className="home-intro">
                  <h2 data-aos="fade-up">{restData.acf.who_i_am}</h2>
                  <h2
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="specialty"
                  >
                    {restData.acf.specialty}
                  </h2>
                  <p data-aos="fade-left" data-aos-delay="400">
                    {restData.acf.what_i_do}
                  </p>
                  <Link to="/about">
                    {restData.acf.cta_to_about.title}
                  </Link>
                </section>
              </div>

              <GoDownButton />

              {restDataProjects && <Carousel data={restDataProjects} />}
            </div>
          )}
      </main>
      )}
    </>
    </HelmetProvider>
  );
}

export default PageHome;
