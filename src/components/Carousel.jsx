import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel( { data } ) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
      ]
  };
  return (
    <>
        <h2 className="home-works">My Work</h2>
        <div className="slider-container">
        <Slider {...settings}>
            {data.map((project, index) => (
                <img key={index} src={project.acf.project_image.url} alt={project.acf.project_image.alt}></img>
            ))}
        </Slider>
        </div>
    </>
  );
}

export default Carousel;