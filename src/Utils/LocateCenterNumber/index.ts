type Props = {
	currentPage: number;
	totalPages: number;
	siblingCount: number;
};

export default function LocateCenterNumber({
	currentPage,
	totalPages,
	siblingCount,
}: Props): number[] {
	if (currentPage === 1 || currentPage === totalPages) {
		return [];
	}
	// if (currentPage + siblingCount >= totalPages) {
	// 	return [];
	// }
	// if (currentPage - siblingCount <= 1) {
	// 	return [];
	// }
	return [currentPage];
}
