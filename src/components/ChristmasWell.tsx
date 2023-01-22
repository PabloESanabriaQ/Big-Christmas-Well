import { useState } from "react";

import ManageWinners from "./ManageWinners";
import ShowWinners from "./ShowWinners";

import type Winner from "../types/Winner";
import PrizeForm from "./PrizeForm";

export default function ChristmasWell() {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [showWinners, toggleShowWinners] = useState<boolean>(false);
  const [prize, setPrize] = useState<number>(0);

  return (
    <>
      <h1>Gran Pozo Navideño</h1>
      {showWinners ? (
        <>
          <ShowWinners winners={winners} position={1} prize={prize * 0.5} />
          <ShowWinners winners={winners} position={2} prize={prize * 0.20} />
          <ShowWinners winners={winners} position={3} prize={prize * 0.15}/>
          <ShowWinners winners={winners} position={4} prize={prize * 0.1} />
          <ShowWinners winners={winners} position={5} prize={prize * 0.05} />
        </>
      ) : (
        <>
          <ManageWinners winners={winners} onWinnersChange={setWinners} />
          <PrizeForm prize={prize} onPrizeChange={setPrize} toggleShowWinners={toggleShowWinners} />
        </>
      )}
    </>
  );
}
