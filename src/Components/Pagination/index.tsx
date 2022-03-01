import { useEffect, useState } from "react";
import "./index.css";

type Props = {
  count: number;
  currentPage: number;
  onChange: (data: number) => void;
};

export default function Pagination({ count, currentPage, onChange }: Props) {
  const [buttons, setButtons] = useState<number[]>([]);
  const [siblingCount, setSiblingCount] = useState(2);
  const [minorInterval, setMinorInterval] = useState(false);
  const [majorInterval, setMajorInterval] = useState(false);
  const [hideCentral, setHideCentral] = useState(false);

  function verifyInterval() {
    //Se estiver na primeira pág ou na última, o botão central não precisa ser exibido
    if (currentPage === 1 || currentPage === count) {
      setHideCentral(true);
    } else {
      setHideCentral(false);
    }

    if (currentPage - 1 === 1) {
      setHideCentral(false);
    }

    if (currentPage - 1 !== 1) {
      setMinorInterval(true);
    } else {
      setMinorInterval(false);
    }

    if (currentPage === 1 || currentPage === count) {
      setMinorInterval(false);
    }

    if (currentPage + 1 !== count) {
      setMajorInterval(true);
    } else {
      setMajorInterval(false);
    }
  }

  useEffect(() => {
    verifyInterval();
  }, [currentPage]);

  function decrease() {
    if (currentPage === 1) return;
    onChange(currentPage - 1);
  }

  function increase() {
    if (currentPage === count) return;
    onChange(currentPage + 1);
  }

  useEffect(() => {
    const buttonsTemp: number[] = [];
    for (let i = 1; i <= count; i += 1) {
      buttonsTemp.push(i);
    }
    setButtons([...buttonsTemp]);
  }, [count]);

  return (
    <div className="containerCentralPagination">
      <button
        data-prev
        disabled={currentPage === 1}
        type="button"
        onClick={decrease}
        className="button"
      >
        ⬅️
      </button>

      <button
        data-firstpage
        type="button"
        className={[1 === currentPage ? "selected" : "", "button"]
          .toString()
          .replace(",", " ")}
        onClick={() => onChange(1)}
      >
        {1}
      </button>

      {currentPage - 1 > 1 && currentPage !== count && (
        <button data-pointsMinor type="button" className="button">
          ...
        </button>
      )}

      {currentPage !== 1 && currentPage !== count && (
        <button
          data-centralButton
          type="button"
          className={currentPage === currentPage ? "selected" : ""}
          onClick={() => onChange(currentPage)}
        >
          {currentPage}
        </button>
      )}

{currentPage + 1 < count  && currentPage !== 1 && (
        <button data-pointsMajor type="button" className="button">
          ...
        </button>
      )}

      <button
        data-lastpage
        type="button"
        className={[count === currentPage ? "selected" : "", "button"]
          .toString()
          .replace(",", " ")}
        onClick={() => onChange(count)}
      >
        {count}
      </button>

      <button
        type="button"
        disabled={currentPage === count}
        onClick={increase}
        className="button"
      >
        ➡️
      </button>
    </div>
  );
}
