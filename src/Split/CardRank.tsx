export enum CardRank {
  Ace = 'A',
  King = 'K',
  Queen = 'Q',
  Jack = 'J',
  Ten = '10',
  Nine = '9',
  Eight = '8',
  Seven = '7',
  Six = '6',
  Five = '5',
  Four = '4',
  Three = '3',
  Two = '2',
}

export const AllRanks = [
  CardRank.Ace,
  CardRank.King,
  CardRank.Queen,
  CardRank.Jack,
  CardRank.Ten,
  CardRank.Nine,
  CardRank.Eight,
  CardRank.Seven,
  CardRank.Six,
  CardRank.Five,
  CardRank.Four,
  CardRank.Three,
  CardRank.Two];

export function getRankValues(rank: CardRank): number[] {
  switch (rank) {
    case CardRank.Ace: return [0, 30, 70, 120, 180, 200];
    case CardRank.King:
    case CardRank.Queen:
    case CardRank.Jack:
      return [0, 20, 50, 90, 140, 200];
    case CardRank.Ten:
    case CardRank.Nine:
    case CardRank.Eight:
    case CardRank.Seven:
    case CardRank.Six:
    case CardRank.Five:
    case CardRank.Four:
    case CardRank.Three:
      return [0, 10, 30, 60, 100, 200];
    case CardRank.Two: return [0, 5, 20, 40, 70, 200];
    default: return [];
  }
}

export default CardRank;