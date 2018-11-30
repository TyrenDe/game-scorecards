import styled from "../../Theme";

export const StyledHeader = styled.div`
  background-color: ${ props => props.theme.SecondaryBackgroundColor };
  color: ${ props => props.theme.PrimaryColor };

  padding: 10px 0 10px 0;

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    display: inline;
    padding: 10px;
  }
`;
