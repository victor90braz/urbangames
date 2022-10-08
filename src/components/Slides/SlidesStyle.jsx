import styled from "styled-components";
import devices from "../../Utils/MediaQueries/MediaQueries";

const SlidesStyle = styled.div`
  .carousel-data {
    background: #ffc107de;
    font-size: 10px;
    font-weight: 500;
    color: black;

    h3 {
      font-size: 1rem;
      color: white;
    }
    p {
      font-size: 0.9rem;
    }

    @media ${devices.laptop && devices.tablet} {
      h3 {
        font-size: 1.3rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
`;

export default SlidesStyle;
