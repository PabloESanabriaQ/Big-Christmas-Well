import Winner from "../types/Winner";
import Form from "./Form";
import ShowWinners from "./ShowWinners";

interface Props {
  winners: Winner[];
  onWinnersChange: (newWinnersList: Winner[]) => void;
}

export default function ManageWinners({ winners, onWinnersChange }: Props) {
  return (
    <>
      {winners.filter((winner) => winner.position === 1).length === 0 && (
        <Form
          winners={winners}
          onWinnersChange={onWinnersChange}
          position={1}
        />
      )}
      {winners.filter((winner) => winner.position === 1).length !== 0 && (
        <ShowWinners winners={winners} position={1} />
      )}

      <Form winners={winners} onWinnersChange={onWinnersChange} position={2} />
      {winners.filter((winner) => winner.position === 2).length !== 0}

      <Form winners={winners} onWinnersChange={onWinnersChange} position={3} />
      {winners.filter((winner) => winner.position === 3).length !== 0}

      <Form winners={winners} onWinnersChange={onWinnersChange} position={4} />
      {winners.filter((winner) => winner.position === 4).length !== 0}

      <Form winners={winners} onWinnersChange={onWinnersChange} position={5} />
      {winners.filter((winner) => winner.position === 5).length !== 0}
    </>
  );
}
