import styled from "../../../Theme";

export const Board = styled.div`
  border: 1px solid ${ props => props.theme.PrimaryColor };
  background-color: ${ props => props.theme.SecondaryBackgroundColor };

  padding: 5px;
  max-width: 400px;
  margin: auto;
`;

export const ScoreHeader = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  margin: auto;
  padding-bottom: 5px;
  border-bottom: 1px solid ${ props => props.theme.PrimaryColor };
`;

export const Score = styled.div`
  margin: auto;

  min-width: 110px;
  text-align: center;
  font-size: small;
`;

export const ScoreValue = styled(Score)`
  font-weight: bold;
  font-size: x-large;
`;

export const ScoreButton = styled.button`
  color: ${ props => props.theme.ButtonColor };
  background-color: ${ props => props.theme.ButtonBackgroundColor };
  border-bottom: 1px solid ${ props => props.theme.ButtonColor };

  height: 40px;
  width: 40px;
  font-weight: bold;
`;
