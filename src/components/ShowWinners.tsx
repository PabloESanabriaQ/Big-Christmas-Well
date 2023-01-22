import type Winner from "../types/Winner";

interface Props {
  winners: Winner[];
  prize?: number;
  position: number;
}

export default function ShowWinners({ winners, prize, position }: Props) {
  
  
  if (!prize) {
    return (
      <>
        <h2>GANADORES POSICIÓN {position}</h2>
        <ul>
          {winners
            .filter((winner) => winner.position === position)
            .map((winner) => (
                <li key={winner.name}>
                  <span>{winner.name}</span>
                </li>
            ))}
        </ul>
      </>
    );
  }

  const individualPrize = Math.round(prize * 100) / 100 / winners.length;

  return (
    <>
      <h2>GANADORES POSICIÓN {position}</h2>
      <ul>
        {winners
          .filter((winner) => winner.position === position)
          .map((winner) => (
              <li key={winner.name}>
                <span>{winner.name}</span>
                <span>{"$" + individualPrize}</span>
              </li>
          ))}
      </ul>
    </>
  );
}
