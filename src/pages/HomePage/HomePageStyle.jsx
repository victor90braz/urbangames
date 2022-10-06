import styled from "styled-components";
import devices from "../../Utils/MediaQueries/MediaQueries";

const HomePageStyle = styled.div`
  margin: 10px;

  section {
    margin-bottom: 30px;
  }

  h2 {
    font-size: 50px;
  }

  .container-image {
    background-image: url("/images/soccer-field.jpg");
    background-color: #cccccc;
    height: 87vh;
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
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

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

  .section-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${devices.laptop} {
    .container-text {
      h2,
      h3 {
        font-size: 3.2rem;
      }

      button {
        font-size: 1.5rem;
      }
    }

    .container-image {
      height: 38vh;
      width: 100%;
    }
    .carousel-item {
      width: 100%;
      height: 50vh;

      img {
        width: 100%;
        object-fit: cover;
      }

      .card-image {
        margin-bottom: 0;
        .card-img-top {
          width: 80vw;
        }
      }
    }
  }
`;

export default HomePageStyle;
