import styled from "styled-components";
const FooterStyle = styled.div`
  .footer {
    padding: 40px 0;
    background-color: black;
    color: white;
  }

  .footer .social {
    display: flex;
    justify-content: center;
    padding-bottom: 25px;
    gap: 40px;
  }

  .footer ul {
    margin-top: 0;
    padding: 0;
    list-style: none;
    text-align: center;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 0;
  }

  .footer ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.8;
  }

  .footer ul li {
    display: inline-block;
    padding: 0 15px;
  }

  .footer ul a:hover {
    opacity: 1;
    background: #00c8fffa;
  }

  .copyright {
    margin-top: 15px;
    text-align: center;
    font-size: 25px;
    color: #aaa;
  }
`;
export default FooterStyle;
