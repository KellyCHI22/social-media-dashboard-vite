import styled, { createGlobalStyle } from "styled-components";

export const darkTheme = {
  theme: "dark",
  background: "hsl(230, 17%, 14%)",
  cardBackground: "hsl(228, 28%, 20%)",
  lightText: "hsl(228, 34%, 66%)",
  strongText: "hsl(0, 0%, 100%)",
  toggle: "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
};

export const lightTheme = {
  theme: "light",
  background: "hsl(0, 0%, 100%)",
  cardBackground: "hsl(227, 47%, 96%)",
  lightText: "hsl(228, 12%, 44%)",
  strongText: "hsl(230, 17%, 14%)",
  toggle: "hsl(230, 22%, 74%)",
};

export const GlobalStyle = createGlobalStyle`
  // css reset
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
  // reset over
  body {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;

    color: ${(props) => props.theme.strongText};
    background-color: ${(props) => props.theme.background};
  }
`;

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 1rem 0;

  @media screen and (min-width: 768px) {
    max-width: 750px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1200px;
  }
`;

export const GridContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
