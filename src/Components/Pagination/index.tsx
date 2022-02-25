import { useEffect, useState } from "react";
import "./index.css";

type Props = {
  count: number;
  currentPage: number;
  onChange: (data: number) => void;
};

export default function Pagination({ count, currentPage, onChange }: Props) {
  const [buttons, setButtons] = useState<number[]>([]);
  const [minorInterval, setMinorInterval] = useState(false);
  const [majorInterval, setMajorInterval] = useState(false);
  const [hideCentral, setHideCentral] = useState(false)

  function verifyInterval() {

    //Se estiver na primeira pág ou na última, o botão central não precisa ser exibido
    if(currentPage === 1 || currentPage === count){
      setHideCentral(true)
    }else{
      setHideCentral(false)      
    }

    if(currentPage - 1 === 1){
      setHideCentral(false)  
    }

    if (currentPage - 1 !== 1) {
      setMinorInterval(true);
    }else{
      setMinorInterval(false);
    }

    if (currentPage === 1 ||currentPage === count ) {
      setMinorInterval(false);
    }

    if (currentPage + 1 !== count) {
      setMajorInterval(true);
    }else{
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

  function Build() {
    const b: JSX.Element[] = [];
    buttons.forEach((element) => {
      if (element === currentPage) {
        const t = (
          <button
            data-centralButton="true"
            type="button"
            className={element === currentPage ? "selected" : ""}
            onClick={() => onChange(element)}
          >
            {element}
          </button>
        );
        b.push(t);
      }
    });
    return b;
  }

  return (
    <div className="containerCentralPagination">
      <button type="button" onClick={decrease} className="button">
        ⬅️
      </button>

      <button
        type="button"
        className={[1 === currentPage ? "selected" : "", "button"].toString().replace(',',' ')}
        onClick={() => onChange(1)}
      >
        {1}
      </button>
      
      {minorInterval && <div className="interval">...</div>}

  {
    currentPage - 1 > 1 && (
<button
          type="button"
          className="button"
          onClick={() => onChange(currentPage - 1)}
        >
          {currentPage - 1}
        </button>
    )
  }
          

      {!hideCentral && Build()}
      {majorInterval && <div className="interval">...</div>}
      <button
        type="button"
        className={[count === currentPage ? "selected" : "", "button"].toString().replace(',',' ')}
        onClick={() => onChange(count)}
      >
        {count}
      </button>

      <button type="button" onClick={increase} className="button">
        ➡️
      </button>
    </div>
  );
}
