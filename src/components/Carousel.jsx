import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <section className="home-works-section">
        <h2 className="home-works-title">My Work</h2>
        <div className="slider-container">
        <Slider {...settings}>
            {data.map((project, index) => (
              <article key={index} className="project-card">
                <a href="">
                  <img src={project.acf.project_image.url} alt={project.acf.project_image.alt}></img>
                  <h3>{project.acf.project_title}</h3>
                </a>
              </article>
            ))}
        </Slider>
        </div>
    </section>
  );
}

export default Carousel;