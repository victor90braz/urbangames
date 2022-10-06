import styled from "styled-components";
import devices from "../../Utils/MediaQueries/MediaQueries";

const NavigationStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  @media ${devices.laptop} {
    padding: 20px 80px;
  }
`;

export default NavigationStyle;
