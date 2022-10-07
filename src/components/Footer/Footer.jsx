import FooterStyle from "./FooterStyle";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer">
        <div className="social">
          <a
            href="https://www.linkedin.com/in/victor-braz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin size={50} />
          </a>
          <a
            href="https://github.com/victor90braz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={50} />
          </a>
        </div>

        <ul className="list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p className="copyright">
          <small>&copy; Copyright 2022 Victor Braz</small>
        </p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
