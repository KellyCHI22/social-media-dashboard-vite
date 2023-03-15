import styled from "styled-components";
import { darkTheme, Container } from "../globalStyles";

const StyledHeader = styled.header`
  h1 {
    font-size: 1.5rem;
  }

  p {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.lightText};
    color: ${(props) => props.theme.lightText};
  }

  span {
    color: ${(props) => props.theme.lightText};
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      padding-bottom: unset;
      margin-bottom: unset;
      border-bottom: unset;
    }
  }
`;

const StyledToggleBtn = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  width: 3.5rem;
  height: 1.65rem;
  border-radius: 1rem;
  background-image: ${(props) => props.theme.toggle};
  background-color: ${(props) => props.theme.toggle};

  .circle {
    position: absolute;
    left: ${(props) => (props.theme.theme === "dark" ? "0.2rem" : "2rem")};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme.theme === "dark" ? "hsl(230, 17%, 14%)" : "white"};
    transition: transform 200ms ease-in;
  }

  &:hover {
    background-image: ${(props) =>
      props.theme.theme === "light" && darkTheme.toggle};
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export default function Header({ toggleTheme }) {
  return (
    <Container>
      <StyledHeader>
        <div>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <FlexContainer>
          <span>Dark mode</span>
          <StyledToggleBtn onClick={toggleTheme}>
            <div className="circle"></div>
          </StyledToggleBtn>
        </FlexContainer>
      </StyledHeader>
    </Container>
  );
}
