import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import SlidesImages from "./SlidesAssets";

function Slides() {
  return (
    <Carousel fade>
      {SlidesImages.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img
            className="d-block w-100"
            src={`/images/${slide.image}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slides;
