import styled from "styled-components";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import upIcon from "../assets/icon-up.svg";
import downIcon from "../assets/icon-down.svg";

const socialIcon = {
  facebook: facebookIcon,
  twitter: twitterIcon,
  instagram: instagramIcon,
  youtube: youtubeIcon,
};

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  color: ${(props) => props.theme.lightText};
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 0.5rem;

  &:hover {
    background-color: ${(props) =>
      props.theme.theme === "dark"
        ? "hsl(228, 28%, 25%)"
        : "hsl(227, 47%, 90%)"};
  }

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.strongText};
    margin-top: 1rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
`;

const ChangeStats = styled(FlexContainer)`
  align-self: end;
  align-items: center;
  margin-bottom: 0.5rem;
  color: ${(props) =>
    props.change > 0 ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)"};
`;

export default function StatsCardSmall({ stats }) {
  const { title, social, count, change } = stats;

  return (
    <StyledCardContainer>
      <FlexContainer>
        <p>{title}</p>
        <img src={socialIcon[social]} alt={`${social}-icon`} />
      </FlexContainer>
      <FlexContainer>
        <h2>{count > 10000 ? `${parseInt(count / 1000)}K` : count}</h2>
        <ChangeStats change={change}>
          <img
            src={change > 0 ? upIcon : downIcon}
            alt={change > 0 ? "up-icon" : "down-icon"}
          />
          <span>{Math.abs(change)}</span>
          <span>%</span>
        </ChangeStats>
      </FlexContainer>
    </StyledCardContainer>
  );
}
