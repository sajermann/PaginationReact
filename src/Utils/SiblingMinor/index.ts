type Props = {
	centralNumber: number;
	siblingCount: number;
};

export default function SiblingMinor({
	centralNumber,
	siblingCount,
}: Props): number[] {
	const numerosRettorno: number[] = [];
	if (centralNumber - siblingCount <= 1) {
		for (let i = 1; i <= siblingCount + 1; i += 1) {
			numerosRettorno.push(i + 1);
		}
		const sorted = numerosRettorno.sort((a, b) => a - b);
		if (sorted[0] - 1 > 1) {
			sorted[0] = -1;
		}
		console.log({ minor: sorted });
		return sorted;
	}

	for (let i = 1; i <= siblingCount + 1; i += 1) {
		if (centralNumber - i !== 1) {
			numerosRettorno.push(centralNumber - i);
		}
	}
	const sorted = numerosRettorno.sort((a, b) => a - b);
	if (sorted[0] - 1 > 1) {
		sorted[0] = -1;
	}
	console.log({ minor: sorted });
	return sorted;
}
