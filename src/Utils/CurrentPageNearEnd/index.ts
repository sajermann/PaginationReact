type Props = {
	currentPage: number;
	totalPages: number;
};

export default function CurrentPageNearEnd({ currentPage, totalPages }: Props) {
	const inicio = currentPage - 1;
	const fim = totalPages - currentPage;

	return fim < inicio;
}
