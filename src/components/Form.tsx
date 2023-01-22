import ShowWinners from "./ShowWinners";

import type Winner from "../types/Winner";
import { FormEvent, useState } from "react";

interface Props {
  winners: Winner[];
  onWinnersChange: (setNewWinners: Winner[]) => void;
  position: number;
}

export default function Form({ winners, position, onWinnersChange }: Props) {
  const [winner, setWinner] = useState<string>("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (winner === "" || winners.find((item) => item.name === winner) !== undefined) {
      return "";
    }
    
    if(position === 1 && winners.filter((winner) => winner.position === position).length !==
    0) return "";

    onWinnersChange([
      ...winners,
      { position: position, name: winner, prize: 0 },
    ]);
    setWinner("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWinner(e.target.value);
  }

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={winner} onChange={handleChange} 
        placeholder={`Ingrese ganadores en el puesto ${position}`}/>
        <button>Agregar ganador</button>
        {winners.find((item) => item.name === winner) !== undefined && (
          <h5>
            Ingrese otro nombre por favor, ese nombre ya se encuentra entre los
            ganadores!
          </h5>
        )}
      </form>
      {winners.filter((winner) => winner.position === position).length !==
        0 && <ShowWinners winners={winners} position={position} />}
    </>
  );
}
