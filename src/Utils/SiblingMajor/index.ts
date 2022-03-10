type Props = {
	centralNumber: number;
	siblingCount: number;
	totalPages: number;
};

export default function SiblingMajor({
	centralNumber,
	siblingCount,
	totalPages,
}: Props): number[] {
	const numerosRettorno: number[] = [];
	if (centralNumber + siblingCount >= totalPages) {
		for (let i = totalPages; i > totalPages - siblingCount + 1; i -= 1) {
			numerosRettorno.push(i - 1);
		}
		const sorted = numerosRettorno.sort((a, b) => a - b);
		if (sorted[sorted.length - 1] + 1 < totalPages) {
			sorted[sorted.length - 1] = -1;
		}
		console.log({ major: sorted });
		return sorted;
	}

	for (let i = 1; i <= siblingCount + 1; i += 1) {
		if (centralNumber + i !== totalPages) {
			numerosRettorno.push(centralNumber + i);
		}
	}
	const sorted = numerosRettorno.sort((a, b) => a - b);
	if (sorted[sorted.length - 1] + 1 < totalPages) {
		sorted[sorted.length - 1] = -1;
	}
	console.log({ major: sorted });
	return sorted;
}
