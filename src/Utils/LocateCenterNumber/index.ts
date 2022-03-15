// const currentPage = 49;
// const totalPages = 50;
// const siblingCount = 3;

import CurrentPageNearEnd from '../CurrentPageNearEnd';

type Props = {
	currentPage: number;
	totalPages: number;
	siblingCount: number;
};

export default function CentralNunmber({
	currentPage,
	totalPages,
	siblingCount,
}: Props): number {
	if (currentPage === totalPages) {
		console.log('Condição sdafas');
		if (totalPages < siblingCount) {
			return 9999;
		}
		if (totalPages > siblingCount) {
			return currentPage - siblingCount - 1;
		}
	}

	if (currentPage < totalPages) {
		console.log('Condição eqweqw');
		if (CurrentPageNearEnd({ currentPage, totalPages })) {
			if (currentPage + siblingCount >= totalPages - 1) {
				return totalPages - siblingCount - 1;
			}
		} else if (currentPage - siblingCount <= 1) {
			return 1 + siblingCount + 1;
		}
	}

	return currentPage;
}

// console.log(CentralNunmber({currentPage,totalPages, siblingCount }))
