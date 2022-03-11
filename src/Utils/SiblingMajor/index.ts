type Props = {
	currentPage: number;
	siblingCount: number;
	totalPages: number;
};

export default function SiblingMajor({
	currentPage,
	siblingCount,
	totalPages,
}: Props): number[] {
	const numerosRettorno: number[] = [];

	if (currentPage === totalPages) {
		return [];
	}
	for (let i = 1; i <= siblingCount; i += 1) {
		if (currentPage + i < totalPages) {
			numerosRettorno.push(currentPage + i);
		}
	}
	const sorted = numerosRettorno.sort((a, b) => a - b);
	return sorted;
}
