import Header from "./components/Header";
import StatsCardLarge from "./components/StatsCardLarge";
import StatsCardSmall from "./components/StatsCardSmall";
import { followerStats, otherStats } from "./constants";
import { ThemeProvider } from "styled-components";
import {
  darkTheme,
  lightTheme,
  GlobalStyle,
  Container,
  GridContainer,
} from "./globalStyles.js";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <GridContainer>
          {followerStats.map((stats) => {
            return <StatsCardLarge key={stats.id} stats={stats} />;
          })}
        </GridContainer>
        <Container>
          <h2>Overview - Today</h2>
          <GridContainer>
            {otherStats.map((stats) => {
              return <StatsCardSmall key={stats.id} stats={stats} />;
            })}
          </GridContainer>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
