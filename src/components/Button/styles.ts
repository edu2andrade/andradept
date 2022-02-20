import styled from "styled-components";

export const ButtonStyles = styled.button`
  background: var(--dark-green);
  background: -moz-linear-gradient(
    0deg,
    var(--dark-green) 0%,
    var(--light-green) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    var(--dark-green) 0%,
    var(--light-green) 100%
  );
  background: linear-gradient(
    0deg,
    var(--dark-green) 0%,
    var(--light-green) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#115d6d",endColorstr="#24eff2",GradientType=1);

  padding: 0.5rem 2rem;
  margin-top: 2rem;

  border: 0;
  border-radius: var(--border-radius);
  text-align: center;
  text-decoration: none;
  display: inline-block;

  box-shadow: -3px 5px 20px 0px rgba(0, 0, 0, 0.7);

  a {
    color: var(--background);
  }

  transition: 200ms;

  :hover {
    filter: brightness(80%);
  }
`;
