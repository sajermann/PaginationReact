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
	if (currentPage === totalPages) {
		console.log({ centerNumber: currentPage - siblingCount - 1 });
		return currentPage - siblingCount - 1;
	}
	if (currentPage === 1) {
		console.log({ centerNumber: currentPage + siblingCount + 1 });
		return currentPage + siblingCount + 1;
	}
	if (
		currentPage - siblingCount > 1 &&
		currentPage + siblingCount < totalPages
	) {
		console.log({ centerNumber: currentPage });
		return currentPage;
	}

	if (currentPage - siblingCount < 1) {
		console.log({ centerNumber: currentPage + siblingCount });
		return currentPage + siblingCount;
	}

	if (currentPage - siblingCount <= 1) {
		console.log({ centerNumber: currentPage + siblingCount - 1 });
		return currentPage + siblingCount - 1;
	}

	if (currentPage + siblingCount > totalPages) {
		console.log({ centerNumber: currentPage - siblingCount });
		return currentPage - siblingCount;
	}

	if (currentPage + siblingCount >= totalPages) {
		console.log({ centerNumber: currentPage - siblingCount + 1 });
		return currentPage - siblingCount + 1;
	}

	return currentPage;
}
