import React, { ChangeEvent, FormEvent, InputHTMLAttributes } from "react";

interface Props {
  prize: number;
  onPrizeChange: (newPrize: number) => void;
  toggleShowWinners: (showWinners: boolean) => void;
}

export default function PrizeForm({ prize, onPrizeChange, toggleShowWinners }: Props) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    toggleShowWinners(true);
    
    console.log(prize)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onPrizeChange(+e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ingrese el dinero recaudado:</h2>
      <input
        type="number"
        value={prize}
        onChange={handleChange}
        placeholder="Ingrese el dinero recaudado"
      />
      <h2>Presione el botón cuando haya cargado todos los ganadores!</h2>
      <button>Calcular premios</button>
    </form>
  );
}
