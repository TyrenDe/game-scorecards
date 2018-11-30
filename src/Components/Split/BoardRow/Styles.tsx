import styled from "../../../Theme";

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(30px, auto);

  padding-top: 5px;
`;

export const SquareHeader = styled.button`
  color: ${ props => props.theme.ButtonColor };
  background-color: ${ props => props.theme.ButtonBackgroundColor };
  border-bottom: 1px solid ${ props => props.theme.ButtonColor };

  font-weight: bold;
`;

export const Square = styled<{isSelected: boolean}, "div">("div")`
  background: ${ props => props.isSelected ? props.theme.PrimaryBackgroundColor : props.theme.InverseBackgroundColor };
  color: ${ props => props.isSelected ? props.theme.PrimaryColor : props.theme.InverseColor };
  border: 1px solid ${ props => props.isSelected ? props.theme.PrimaryColor : props.theme.SecondaryBackgroundColor };

  text-align: center;
  padding-top: 2px;
  font-weight: ${ props => props.isSelected ? "bold" : "normal" };
`;
