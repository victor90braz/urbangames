import styled from "styled-components";

const AppStyle = styled.div`
  border: 1px dotted red;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  h1 {
    display: none;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;
  }
`;

export default AppStyle;
