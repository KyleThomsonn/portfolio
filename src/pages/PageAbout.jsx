import { useState, useEffect } from "react";
import { restBase } from "../utilities/Utilities";
import MyAccordion from "../components/Accordion";
import SkillsList from "../components/SkillsList";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utilities/Utilities";
import { appTitle } from "../global/global";
import { Helmet } from "react-helmet";

function PageAbout() {
  const restPathPage = restBase + "pages/12?acf_format=standard";

  const [restDataPage, setDataPage] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    document.title = appTitle + " | About";
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response_page = await fetch(restPathPage);
        if (!response_page.ok) {
          throw new Error("Failed to fetch data");
        }
        const restDataPage = await response_page.json();

        setDataPage(restDataPage);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [restPathPage]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      delay: 100,
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <>

      <Helmet>
        <meta name="description" content={restDataPage.acf && restDataPage.acf.seo_meta_description} />
      </Helmet>

      {isLoading ? (
        <Loading />
      ) : (
        
        <main id="#main">
          <div className="page-container">
            {restDataPage.acf && (
              <div className="about-wrapper" data-aos="fade-up">
                <div className="img-wrapper">
                  <img
                    className="portrait"
                    src={!isHovered ? restDataPage.acf.self_image.url : restDataPage.acf.second_image.url}
                    alt={!isHovered ? restDataPage.acf.self_image.alt : restDataPage.acf.second_image.alt}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
                <div className="about-text-wrapper">
                  <section className="about-intro">
                    <h2>{restDataPage.acf.about_title}</h2>
                    <p>{restDataPage.acf.about_me_section}</p>
                  </section>

                  <section className="about-hobbies">
                    <MyAccordion
                      title={restDataPage.acf.hobbies_title}
                      data={restDataPage.acf.hobbies}
                    />
                  </section>

                  <section className="about-skills">
                    <SkillsList data={restDataPage} />
                  </section>
                  {restDataPage.acf.cta && (
                    <div className="about-projects-btn">
                      <Link onClick={scrollToTop} to="/projects">{restDataPage.acf.cta.title}</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
}

export default PageAbout;
