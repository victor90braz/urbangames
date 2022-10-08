import FooterStyle from "./FooterStyle";
import { ListPagesAssets, SocialAssets } from "./FooterAssets";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer">
        <div className="social">
          <a
            href={SocialAssets.grLinkedin.href}
            target={SocialAssets.atributes.target}
            rel={SocialAssets.atributes.rel}
          >
            <GrLinkedin
              size={SocialAssets.atributes.size}
              data-testid={SocialAssets.grLinkedin.dataTestid}
            />
          </a>

          <a
            href={SocialAssets.bsGithub.href}
            target={SocialAssets.atributes.target}
            rel={SocialAssets.atributes.rel}
          >
            <BsGithub
              size={SocialAssets.atributes.size}
              data-testid={SocialAssets.bsGithub.dataTestid}
            />
          </a>
        </div>

        <ul className="list" role="list">
          {ListPagesAssets.map((page) => (
            <li key={page.id}>
              <a href={page.href} role="listitem">
                {page.name}
              </a>
            </li>
          ))}
        </ul>

        <p className="copyright">
          <small>{SocialAssets.atributes.copyright}</small>
        </p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
