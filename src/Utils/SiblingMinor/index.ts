type Props = {
	currentPage: number;
	siblingCount: number;
};

export default function SiblingMinor({
	currentPage,
	siblingCount,
}: Props): number[] {
	const numerosRettorno: number[] = [];

	if (currentPage === 1) {
		return [];
	}
	for (let i = siblingCount; i >= 1; i -= 1) {
		if (i !== currentPage && currentPage - i > 1) {
			numerosRettorno.push(currentPage - i);
		}
	}
	const sorted = numerosRettorno.sort((a, b) => a - b);
	return sorted;
}
