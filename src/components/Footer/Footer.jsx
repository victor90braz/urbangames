import FooterStyle from "./FooterStyle";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { ListAssets } from "./FooterAssets";

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
            <GrLinkedin size={50} data-testid="idLinkedin" />
          </a>
          <a
            href="https://github.com/victor90braz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={50} data-testid="idGithub" />
          </a>
        </div>

        <ul className="list">
          {ListAssets.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>

        <p className="copyright">
          <small>Copyright 2022 Victor Braz</small>
        </p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
