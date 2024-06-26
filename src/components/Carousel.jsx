import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Carousel( { data } ) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
  };
  return (
    <section data-aos="fade-up" data-aos-delay="200" className="home-works-section" id="home-works-section">
        <h2 className="home-works-title">My Work</h2>
        <div className="slider-container">
        <Slider {...settings}>
            {data.map((project, index) => (
              <article key={index} className="project-card">
                <Link to={`/${project.slug}`}>
                  <img src={project.acf.project_image.url} alt={project.acf.project_image.alt}></img>
                  <h3>{project.acf.project_title}</h3>
                </Link>
              </article>
            ))}
        </Slider>
        </div>
        <div className="all-projects-btn">
        <Link to="/projects">See All Projects</Link>
        </div>
    </section>
  );
}

export default Carousel;