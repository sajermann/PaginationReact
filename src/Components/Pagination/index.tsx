import { useState } from "react";
import "./index.css";

type Props = {
  count: number;
  currentPage: number;
  onChange: (data: number) => void;
};

export default function Pagination({ count, currentPage, onChange }: Props) {
  const [siblingCount] = useState(1);
  function decrease() {
    if (currentPage === 1) return;
    onChange(currentPage - 1);
  }

  function increase() {
    if (currentPage === count) return;
    onChange(currentPage + 1);
  }

  function Build() {
    const buttons: JSX.Element[] = [];

    // #region First Button

    buttons.push(
      <button
        data-prev
        disabled={currentPage === 1}
        type="button"
        onClick={decrease}
        className="button"
      >
        ⬅️
      </button>
    );
    // #endregion

    // #region First Page Button
    buttons.push(
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
    );
    // #endregion

    // #region Points Minor
    // Parece estar funcionando
    if (currentPage - siblingCount > 2) {
      buttons.push(
        <button data-pointsMinor type="button" className="button">
          ...
        </button>
      );
    }
    // #endregion

    // #region Brothers Minor
    /*
      Adicionar os irmão menores
      Parece estar funcionando    
    */
    for (let i = siblingCount; i > 0; i -= 1) {
      if (i >= 1 && i < currentPage && currentPage - i !== 1) {
        buttons.push(
          <button
            data-BrothersMinor
            type="button"
            className={[i === currentPage ? "selected" : "", "button"]
              .toString()
              .replace(",", " ")}
            onClick={() => onChange(currentPage - i)}
          >
            {currentPage - i}
          </button>
        );
      }
    }
    // #endregion

    // #region Central
  
    if (currentPage !== 1 && currentPage !== count) {
      buttons.push(
        <button
          data-centralButton
          type="button"
          className={currentPage === currentPage ? "selected" : ""}
          onClick={() => onChange(currentPage)}
        >
          {currentPage}
        </button>
      );
    }
    // #endregion

    // #region Brothers Major
    /*
      Adicionar os irmão maiores
      Parece estar funcionando
         
    */
      for (let i = 1; i <= siblingCount; i += 1) {

        if (i <= count && currentPage + i !== count && currentPage + i < count ) {
          buttons.push(
            <button
              data-BrothersMajor
              type="button"
              className={[currentPage + i === currentPage ? "selected" : "", "button"]
                .toString()
                .replace(",", " ")}
              onClick={() => onChange(currentPage + i)}
            >
              {currentPage + i}
            </button>
          );
        }
      }
      // #endregion

    // #region Points Major
    
    // if (currentPage + 1 < count - 2 &&  currentPage + siblingCount < count) {
    if (count - (currentPage + siblingCount) > 1) {
      buttons.push(
        <button data-pointsMajor type="button" className="button">
          ...
        </button>
      );
    }
    // #endregion

    // #region Last Page Button
    buttons.push(
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
    );
    // #endregion

    // #region Last Button
    buttons.push(
      <button
        type="button"
        disabled={currentPage === count}
        onClick={increase}
        className="button"
      >
        ➡️
      </button>
    );
    // #endregion

    return buttons;
  }

  return <div className="containerCentralPagination">{Build()}</div>;
}
