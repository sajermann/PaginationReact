import { useState } from "react";
import "./index.css";
//Teste

type Props = {
  totalPages: number;
  currentPage: number;
  siblingCount: number;
  onChange: (data: number) => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  onChange,
  siblingCount,
}: Props) {
  function decrease() {
    if (currentPage === 1) return;
    onChange(currentPage - 1);
  }

  function increase() {
    if (currentPage === totalPages) return;
    onChange(currentPage + 1);
  }

  function MountButton(data:number[], type:string):JSX.Element[]{
    const buttons: JSX.Element[] = [];
    for(let i = 0; i < data.length; i+=1){
      buttons.push(
        <button
        data-type={type}
        type="button"
        className={[data[i] === currentPage ? "selected" : "", "button"]
          .toString()
          .replace(",", " ")}
        onClick={() => onChange(data[i])}
      >
        {data[i]}
      </button>
      )
    }
    return buttons;
  }

  function siblingMinor(centralNumber: number):JSX.Element[]{
    const numerosRettorno : number[] = []
    const irmaos = 2
    if(centralNumber - irmaos <= 1){
      for (let i = 1; i <= irmaos; i+=1){
      
        numerosRettorno.push(i + 1)

      }
      console.log({minor: numerosRettorno.sort()})
      return MountButton(numerosRettorno.sort(),"Minor")
    }

    for (let i = 1; i <= irmaos; i+=1){
      if(centralNumber - i !== 1){
        numerosRettorno.push(centralNumber - i)
      }
    }
    console.log({minor: numerosRettorno.sort()})
    return MountButton(numerosRettorno.sort(),"Minor")
  }

  function siblingMajor(centralNumber: number){
    const numerosRettorno : number[] = []
    const irmaos = 2
    if(centralNumber + irmaos >= totalPages){
      for (let i = totalPages; i > totalPages - irmaos; i-=1){
        // console.log('Caindo Aqui')
        numerosRettorno.push(i - 1)

      }
      console.log({major: numerosRettorno.sort()})
      return MountButton(numerosRettorno.sort(),"Major")
    }

    for (let i = 1; i <= irmaos; i+=1){
      // console.log('Só pra ter certeza')
      if(centralNumber + i !== totalPages){
        numerosRettorno.push(centralNumber + i)
      }
    }
    console.log({major: numerosRettorno.sort()})
    return MountButton(numerosRettorno.sort(),"Major")
  }

  function locateCenterNumberToButton(){
    if(currentPage === totalPages){
      return MountButton([currentPage-siblingCount-1],'Center')
    }
    if(currentPage === 1){
      return MountButton([currentPage+siblingCount+1],'Center')
    }

    if(currentPage-siblingCount > 1  && currentPage+siblingCount < totalPages){
      return MountButton([currentPage],'Center')
    }

    if(currentPage-siblingCount <= 1){
      return MountButton([currentPage + siblingCount],'Center')
    }

    return MountButton([currentPage],'Center')
  }

  function locateCenterNumber(){
    //Quando vou para página 3 o centralNumber passa a 5, o que está errado, em dois irmãos o central number da página 3 é 4
    if(currentPage === totalPages){
      console.log({centerNumber:currentPage-siblingCount-1 })
      return currentPage-siblingCount-1
    }
    if(currentPage === 1){
      console.log({centerNumber:currentPage+siblingCount+1 })
      return currentPage+siblingCount+1
    }
    if(currentPage-siblingCount > 1 && currentPage+siblingCount < totalPages){
      console.log({centerNumber:currentPage })
      return currentPage
    }
    
    if(currentPage-siblingCount <= 1){
      console.log({centerNumber:currentPage+siblingCount })
      return currentPage + siblingCount
    }

    return currentPage
  }


  function Build() {
    const buttons: JSX.Element[] = [];
    const botoesInicio: JSX.Element[] = [];
    const botoesFim: JSX.Element[] = [];

    botoesInicio[0] = (
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
    botoesInicio[1] = (
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
    console.log({currentPage})
    const centerNumber = locateCenterNumber()
    const centerNumberToButton = locateCenterNumberToButton()

    const t = siblingMinor(centerNumber)
    const tt = siblingMajor(centerNumber)

    botoesFim[0] = (
      <button
        data-lastpage
        type="button"
        className={[totalPages === currentPage ? "selected" : "", "button"]
          .toString()
          .replace(",", " ")}
        onClick={() => onChange(totalPages)}
      >
        {totalPages}
      </button>
    );

    botoesFim[1] = (
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={increase}
        className="button"
      >
        ➡️
      </button>
    );

    // #region First Button
    /* Botão de Retroceder uma página, esse botão sempre estará presente */
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
    /* Botão da primeira página, esse botão sempre estará na tela */
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
    /* Botão de reticência esquerda, aparece apenas quando 
      a página atual menos o número de irmãos do botão central é maior que 2
    */
    if (currentPage - siblingCount > 2) {
      buttons.push(
        <button data-pointsMinor type="button" className="button">
          ...
        </button>
      );
    }
    // #endregion

    // #region Brothers Minor
    /* Botões dos irmãos da esquerda, para que eles apareçam devemos
      verificar se o botão em questão é maior ou igual a 1 e se o botão em
      questão é menor que a página atual e a página atual menos o botão em 
      questão é diferente de 1
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
    /*
      Botão central só deve aparecer se a página atual for diferente de 1 e 
      a página atual for diferente da última página
    */
    if (currentPage !== 1 && currentPage !== totalPages) {
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
    /* Botões dos irmãos da direita, para que eles apareçam devemos
      verificar se o botão em questão é menor ou igual ao total de páginas 
      e se a página atual mais o botão em questão é diferente do total de 
      páginas e se a página atual mais o botão em quetão é menor que o total 
      de páginas
    */
    for (let i = 1; i <= siblingCount; i += 1) {
      if (
        i <= totalPages &&
        currentPage + i !== totalPages &&
        currentPage + i < totalPages
      ) {
        buttons.push(
          <button
            data-BrothersMajor
            type="button"
            className={[
              currentPage + i === currentPage ? "selected" : "",
              "button",
            ]
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
    /* Botão de reticência direita, aparece apenas quando 
      o total de páginas menos a página atual mais os irmãos são maiores que 1
    */
    if (totalPages - (currentPage + siblingCount) > 1) {
      buttons.push(
        <button data-pointsMajor type="button" className="button">
          ...
        </button>
      );
    }
    // #endregion

    // #region Last Page Button
    /* Botão da última página, esse botão sempre estará na tela */
    buttons.push(
      <button
        data-lastpage
        type="button"
        className={[totalPages === currentPage ? "selected" : "", "button"]
          .toString()
          .replace(",", " ")}
        onClick={() => onChange(totalPages)}
      >
        {totalPages}
      </button>
    );
    // #endregion

    // #region Last Button
    /* Botão de Avançar uma página, esse botão sempre estará presente */
    buttons.push(
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={increase}
        className="button"
      >
        ➡️
      </button>
    );
    // #endregion

    return botoesInicio.concat(t).concat(centerNumberToButton).concat(tt).concat(botoesFim);
  }

  return <div className="containerCentralPagination">{Build()}</div>;
}
