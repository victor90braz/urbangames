import styled from "styled-components";

const HomePageStyle = styled.div`
  margin: 10px;

  h2 {
    font-size: 50px;
  }
  .container-image {
    background-image: url("/images/soccer-field.jpg");
    background-color: #cccccc;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .container-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }

  button {
    padding: 15px;
    background-color: #ffcb00;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    color: black;
  }

  .card {
    h5 {
      font-family: KoHo, sans-serif;
      line-height: 1.5rem;
      font-weight: 700 !important;
      font-size: 2.25rem !important;
      line-height: 2.5rem !important;
    }
    p {
      font-size: 1.1rem !important;
      line-height: 1.5rem !important;
    }
  }
`;

export default HomePageStyle;
