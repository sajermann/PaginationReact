import { useEffect, useState } from 'react';
import LocateCenterNumber from '../../Utils/LocateCenterNumber';
import MountButton from '../../Utils/MountButton';
import SiblingMajor from '../../Utils/SiblingMajor';
import SiblingMinor from '../../Utils/SiblingMinor';
import { useMyContext } from '../../Context';
import './index.css';
import MountArrowButton from '../../Utils/MountArrowButton';
// Teste

type Props = {
	totalPages: number;
	currentPage: number;
	siblingCount: number;
	onChange: (data: number) => void;
};

export default function Pagination2({
	totalPages,
	currentPage,
	onChange,
	siblingCount,
}: Props) {
	const {
		currentPageInternal,
		setCurrentPageInternal,
		totalPagesInternal,
		setTotalPagesInternal,
		siblingCountInternal,
		setSiblingCountInternal,
		siblingMinorInternal,
		setSiblingMinorInternal,
		siblingMajorInternal,
		setSiblingMajorInternal,
		centralNumberInternal,
		setCentralNumberInternal,
	} = useMyContext();
	useEffect(() => setCurrentPageInternal(currentPage), [currentPage]);
	useEffect(() => setTotalPagesInternal(totalPages), [totalPages]);
	useEffect(() => setSiblingCountInternal(siblingCount), [siblingCount]);
	useEffect(() => setSiblingCountInternal(siblingCount), [siblingCount]);

	useEffect(() => {
		setCentralNumberInternal(
			LocateCenterNumber({ currentPage, siblingCount, totalPages })
		);
	}, [currentPageInternal, siblingCountInternal, totalPagesInternal]);

	useEffect(() => {
		setSiblingMinorInternal(
			SiblingMinor({
				centralNumber: centralNumberInternal,
				siblingCount: siblingCountInternal,
			})
		);
	}, [centralNumberInternal, siblingCountInternal]);

	useEffect(() => {
		setSiblingMajorInternal(
			SiblingMajor({
				centralNumber: centralNumberInternal,
				siblingCount: siblingCountInternal,
				totalPages: totalPagesInternal,
			})
		);
	}, [centralNumberInternal, siblingCountInternal, totalPagesInternal]);

	useEffect(() => {
		if (siblingCountInternal > totalPages) setSiblingCountInternal(0);
	}, [siblingCount, totalPages]);

	function decrease() {
		if (currentPageInternal === 1) return;
		onChange(currentPageInternal - 1);
	}

	function increase() {
		if (currentPageInternal === totalPagesInternal) return;
		onChange(currentPageInternal + 1);
	}

	// function locateCenterNumberToButton() {
	// 	if (currentPage === totalPages) {
	// 		return MountButton({
	// 			data: [currentPage - siblingCountInternal - 1],
	// 			type: 'Center',
	// 			currentPage,
	// 			onChange,
	// 		});
	// 	}
	// 	if (currentPage === 1) {
	// 		return MountButton({
	// 			data: [currentPage + siblingCountInternal + 1],
	// 			type: 'Center',
	// 			currentPage,
	// 			onChange,
	// 		});
	// 	}

	// 	if (
	// 		currentPage - siblingCountInternal > 1 &&
	// 		currentPage + siblingCountInternal < totalPages
	// 	) {
	// 		return MountButton({
	// 			data: [currentPage],
	// 			type: 'Center',
	// 			currentPage,
	// 			onChange,
	// 		});
	// 	}

	// 	if (currentPage - siblingCountInternal < 1) {
	// 		return MountButton({
	// 			data: [currentPage + siblingCountInternal],
	// 			type: 'Center',
	// 			currentPage,
	// 			onChange,
	// 		});
	// 	}

	// 	if (currentPage - siblingCountInternal <= 1) {
	// 		return MountButton({
	// 			data: [currentPage + siblingCountInternal - 1],
	// 			type: 'Center',
	// 			currentPage,
	// 			onChange,
	// 		});
	// 	}

	// 	if (currentPage + siblingCountInternal > totalPages) {
	// 		return MountButton({
	// 			data: [currentPage - siblingCountInternal],
	// 			type: 'Center',
	// 			currentPage,
	// 			onChange,
	// 		});
	// 	}

	// 	if (currentPage + siblingCountInternal >= totalPages) {
	// 		return MountButton({
	// 			data: [currentPage - siblingCountInternal + 1],
	// 			type: 'Center',
	// 			currentPage,
	// 			onChange,
	// 		});
	// 	}

	// 	return MountButton({
	// 		data: [currentPage],
	// 		type: 'Center',
	// 		currentPage,
	// 		onChange,
	// 	});
	// }

	// function locateCenterNumber() {
	//   if (currentPage === totalPages) {
	//     console.log({ centerNumber: currentPage - siblingCountInternal - 1 });
	//     return currentPage - siblingCountInternal - 1;
	//   }
	//   if (currentPage === 1) {
	//     console.log({ centerNumber: currentPage + siblingCountInternal + 1 });
	//     return currentPage + siblingCountInternal + 1;
	//   }
	//   if (
	//     currentPage - siblingCountInternal > 1 &&
	//     currentPage + siblingCountInternal < totalPages
	//   ) {
	//     console.log({ centerNumber: currentPage });
	//     return currentPage;
	//   }

	//   if (currentPage - siblingCountInternal < 1) {
	//     console.log({ centerNumber: currentPage + siblingCountInternal });
	//     return currentPage + siblingCountInternal;
	//   }

	//   if (currentPage - siblingCountInternal <= 1) {
	//     console.log({ centerNumber: currentPage + siblingCountInternal - 1 });
	//     return currentPage + siblingCountInternal - 1;
	//   }

	//   if (currentPage + siblingCountInternal > totalPages) {
	//     console.log({ centerNumber: currentPage - siblingCountInternal });
	//     return currentPage - siblingCountInternal;
	//   }

	//   if (currentPage + siblingCountInternal >= totalPages) {
	//     console.log({ centerNumber: currentPage - siblingCountInternal + 1 });
	//     return currentPage - siblingCountInternal + 1;
	//   }

	//   return currentPage;
	// }

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
				className={[currentPage === 1 ? 'selected' : '', 'button']
					.toString()
					.replace(',', ' ')}
				onClick={() => onChange(1)}
			>
				{1}
			</button>
		);

		botoesFim[0] = (
			<button
				data-lastpage
				type="button"
				className={[totalPages === currentPage ? 'selected' : '', 'button']
					.toString()
					.replace(',', ' ')}
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
				className={[currentPage === 1 ? 'selected' : '', 'button']
					.toString()
					.replace(',', ' ')}
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
		if (currentPage - siblingCountInternal > 2) {
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
		for (let i = siblingCountInternal; i > 0; i -= 1) {
			if (i >= 1 && i < currentPage && currentPage - i !== 1) {
				buttons.push(
					<button
						data-BrothersMinor
						type="button"
						className={[i === currentPage ? 'selected' : '', 'button']
							.toString()
							.replace(',', ' ')}
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
					className="selected"
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
		for (let i = 1; i <= siblingCountInternal; i += 1) {
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
							currentPage + i === currentPage ? 'selected' : '',
							'button',
						]
							.toString()
							.replace(',', ' ')}
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
		if (totalPages - (currentPage + siblingCountInternal) > 1) {
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
				className={[totalPages === currentPage ? 'selected' : '', 'button']
					.toString()
					.replace(',', ' ')}
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

		return (
			botoesInicio
				// .concat(t)
				// .concat(centralNumberInternal)
				// .concat(tt)
				.concat(botoesFim)
		);
	}

	return (
		<div className="containerInfos">
			<table className="tableContainer">
				<thead>
					<th>Prev</th>
					<th>First Page</th>
					<th>Siblings Minor</th>
					<th>Central Number</th>
					<th>Siblings Major</th>
					<th>Last Page</th>
				</thead>
			</table>
			<div className="blockPagination">
				<MountArrowButton
					onClick={decrease}
					icon="⬅️"
					disabled={currentPage === 1}
				/>

				<MountButton
					data={[1]}
					type="FirstPage"
					currentPage={currentPageInternal}
					onChange={onChange}
				/>
				<MountButton
					data={siblingMinorInternal}
					type="Minor"
					currentPage={currentPageInternal}
					onChange={onChange}
				/>
				<MountButton
					data={[LocateCenterNumber({ currentPage, siblingCount, totalPages })]}
					type="CentralNumber"
					currentPage={currentPageInternal}
					onChange={onChange}
				/>
				<MountButton
					data={siblingMajorInternal}
					type="Major"
					currentPage={currentPageInternal}
					onChange={onChange}
				/>
				<MountButton
					data={[totalPagesInternal]}
					type="LastPage"
					currentPage={currentPageInternal}
					onChange={onChange}
				/>

				<MountArrowButton
					onClick={increase}
					icon="➡️"
					disabled={currentPage === totalPages}
				/>
			</div>

			<div className="block">
				<div className="category">
					<h1>Current Page</h1>
				</div>
				<div className="descriptionNumber">
					<h2>{currentPageInternal}</h2>
				</div>
				<div className="demoButton">
					<h3>
						<MountButton
							data={[currentPageInternal]}
							type=""
							currentPage={currentPageInternal}
							onChange={onChange}
						/>
					</h3>
				</div>
			</div>

			<div className="block">
				<div className="category">
					<h1>Central Number</h1>
				</div>
				<div className="descriptionNumber">
					<h2>
						{LocateCenterNumber({ currentPage, siblingCount, totalPages })}
					</h2>
				</div>
				<div className="demoButton">
					<h3>
						<MountButton
							data={[
								LocateCenterNumber({ currentPage, siblingCount, totalPages }),
							]}
							type="CentralNumber"
							currentPage={currentPageInternal}
							onChange={onChange}
						/>
					</h3>
				</div>
			</div>

			<div className="block">
				<div className="category">
					<h1>Total Pages</h1>
				</div>
				<div className="descriptionNumber">
					<h2>{totalPagesInternal}</h2>
				</div>
				<div className="demoButton"> </div>
			</div>

			<div className="block">
				<div className="category">
					<h1>Siblings</h1>
				</div>
				<div className="descriptionNumber">
					<h2>{siblingCountInternal}</h2>
				</div>
				<div className="demoButton"> </div>
			</div>

			<div className="block">
				<div className="category">
					<h1>Sibling Minor</h1>
				</div>
				<div className="descriptionNumber">
					<h2>[{siblingMinorInternal.join(', ')}]</h2>
				</div>
				<div className="demoButton">
					<h3>
						<MountButton
							data={siblingMinorInternal}
							type="Minor"
							currentPage={currentPageInternal}
							onChange={onChange}
						/>
					</h3>
				</div>
			</div>

			<div className="block">
				<div className="category">
					<h1>Sibling Major</h1>
				</div>
				<div className="descriptionNumber">
					<h2>[{siblingMajorInternal.join(', ')}]</h2>
				</div>
				<div className="demoButton">
					<h3>
						<MountButton
							data={siblingMajorInternal}
							type="Major"
							currentPage={currentPageInternal}
							onChange={onChange}
						/>
					</h3>
				</div>
			</div>

			<div className="block">
				<div className="category">
					<h1>Next</h1>
				</div>
				<div className="descriptionNumber">
					<h2>➡️</h2>
				</div>
				<div className="demoButton">
					<h3>
						<MountArrowButton
							onClick={increase}
							icon="➡️"
							disabled={currentPage === totalPages}
						/>
					</h3>
				</div>
			</div>

			<div className="block">
				<div className="category">
					<h1>Prev</h1>
				</div>
				<div className="descriptionNumber">
					<h2>⬅️</h2>
				</div>
				<div className="demoButton">
					<h3>
						<MountArrowButton
							onClick={decrease}
							icon="⬅️"
							disabled={currentPage === 1}
						/>
					</h3>
				</div>
			</div>
			<div className="block">
				<div className="category">
					<h1>First Page</h1>
				</div>
				<div className="descriptionNumber">
					<h2>1</h2>
				</div>
				<div className="demoButton">
					<h3>
						<MountButton
							data={[1]}
							type="FirstPage"
							currentPage={currentPageInternal}
							onChange={onChange}
						/>
					</h3>
				</div>
			</div>
			<div className="block">
				<div className="category">
					<h1>Last Page</h1>
				</div>
				<div className="descriptionNumber">
					<h2>{totalPagesInternal}</h2>
				</div>
				<div className="demoButton">
					<h3>
						<MountButton
							data={[totalPagesInternal]}
							type="LastPage"
							currentPage={currentPageInternal}
							onChange={onChange}
						/>
					</h3>
				</div>
			</div>
		</div>
	);
}
