import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import SlidesImages from "./SlidesAssets";
import SlidesStyle from "./SlidesStyle";

const Slides = () => {
  return (
    <SlidesStyle>
      <Carousel fade>
        {SlidesImages.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              className="d-block w-100"
              src={`images/${slide.image}`}
              alt={slide.alt}
            />

            <Carousel.Caption className="carousel-data">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </SlidesStyle>
  );
};

export default Slides;
