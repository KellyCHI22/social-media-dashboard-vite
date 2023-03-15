import styled from "styled-components";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import upIcon from "../assets/icon-up.svg";
import downIcon from "../assets/icon-down.svg";

const borderColor = {
  facebook: "hsl(208, 92%, 53%)",
  twitter: "hsl(203, 89%, 53%)",
  instagram: "hsl(348, 75%, 57%)",
  youtube: "hsl(348, 97%, 39%)",
};

const socialIcon = {
  facebook: facebookIcon,
  twitter: twitterIcon,
  instagram: instagramIcon,
  youtube: youtubeIcon,
};

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.75rem;
  border-top: ${(props) => `5px solid ${borderColor[props.social]}`};
  color: ${(props) => props.theme.lightText};
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 0.5rem;

  &:hover {
    background-color: ${(props) =>
      props.theme.theme === "dark"
        ? "hsl(228, 28%, 25%)"
        : "hsl(227, 47%, 90%)"};
  }

  p {
    text-transform: uppercase;
    letter-spacing: 3px;
    margin: -1rem 0 1rem;
  }
`;

const StyledH2 = styled.h2`
  font-size: 4rem;
  color: ${(props) => props.theme.strongText};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ChangeStats = styled(FlexContainer)`
  color: ${(props) =>
    props.change > 0 ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)"};
`;

export default function StatsCardLarge({ stats }) {
  const { social, account, count, change } = stats;
  return (
    <StyledCardContainer social={social}>
      <FlexContainer>
        <img src={socialIcon[social]} alt={`${social}-icon`} />
        <span>{account}</span>
      </FlexContainer>
      <StyledH2>
        {count > 10000 ? `${parseInt(count / 1000)}K` : count}
      </StyledH2>
      <p>{social === "youtube" ? "subscribers" : "followers"}</p>
      <ChangeStats change={change}>
        <img
          src={change > 0 ? upIcon : downIcon}
          alt={change > 0 ? "up-icon" : "down-icon"}
        />
        <span>{Math.abs(change)}</span>
        <span>Today</span>
      </ChangeStats>
    </StyledCardContainer>
  );
}
