import styled from "styled-components";

const HomePageStyle = styled.div`
  h2 {
    font-size: 50px;
  }
  .hero-image {
    background-image: url("/images/soccer-field.jpg");
    background-color: #cccccc;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;

export default HomePageStyle;
