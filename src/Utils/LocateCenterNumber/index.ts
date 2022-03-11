type Props = {
	currentPage: number;
	totalPages: number;
	siblingCount: number;
};

export default function LocateCenterNumber({
	currentPage,
	totalPages,
	siblingCount,
}: Props) {
	// Se a página atual for a primeira página ou a última página
	if (currentPage === 1 || currentPage === totalPages) {
		console.log(
			'Condição:',
			'currentPage === 1 || currentPage === totalPages',
			{ currentPage, totalPages, siblingCount }
		);
		/*
			Condição: Se a página atual for igual a primeira página
			Retorno: página atual mais número de irmãos mais 1
			Explicação: número central vem entre os irmãos, sendo a página atual 1, e levando em consideração o número de irmãos 2, fica
			1 + 2 + 1 = 4
		*/
		if (currentPage === 1) {
			return currentPage + siblingCount + 1;
		}
		/*
			Condição: Se a página atual for igual ao total de páginas
			Retorno: página atual menos número de irmãos menos 1
			Explicação: número central vem entre os irmãos, sendo a página atual/última página 6, e levando em consideração o número de irmãos 2, fica
			6 - 2 - 1 = 3
		*/
		if (currentPage === totalPages) {
			return currentPage - siblingCount - 1;
		}
	}

	/*
		Condição:Se a página atual menos os irmãos for maior que 1 e a página atual mais os irmãos for menor que a última página
		Retorno: página atual
		Explicação: se cair nessa condição significa que a página atual é o número central
	*/
	if (
		currentPage - siblingCount > 1 &&
		currentPage + siblingCount < totalPages
	) {
		console.log(
			'Condição:',
			'currentPage - siblingCount > 1 && currentPage + siblingCount < totalPages',
			{ currentPage, totalPages, siblingCount }
		);
		return currentPage;
	}
	console.log('Condição:', 'Não caiu em nenhuma', {
		currentPage,
		totalPages,
		siblingCount,
	});
	return -1;
}
