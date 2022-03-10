import MountButton from '../MountButton';

type Props = {
	currentPage: number;
	totalPages: number;
	siblingCountInternal: number;
	onChange: () => void;
};

export default function LocateCenterNumberToButton({
	currentPage,
	totalPages,
	siblingCountInternal,
	onChange,
}: Props) {
	if (currentPage === totalPages) {
		return MountButton({
			data: [currentPage - siblingCountInternal - 1],
			type: 'Center',
			currentPage,
			onChange,
		});
	}
	if (currentPage === 1) {
		return MountButton({
			data: [currentPage + siblingCountInternal + 1],
			type: 'Center',
			currentPage,
			onChange,
		});
	}

	if (
		currentPage - siblingCountInternal > 1 &&
		currentPage + siblingCountInternal < totalPages
	) {
		return MountButton({
			data: [currentPage],
			type: 'Center',
			currentPage,
			onChange,
		});
	}

	if (currentPage - siblingCountInternal < 1) {
		return MountButton({
			data: [currentPage + siblingCountInternal],
			type: 'Center',
			currentPage,
			onChange,
		});
	}

	if (currentPage - siblingCountInternal <= 1) {
		return MountButton({
			data: [currentPage + siblingCountInternal - 1],
			type: 'Center',
			currentPage,
			onChange,
		});
	}

	if (currentPage + siblingCountInternal > totalPages) {
		return MountButton({
			data: [currentPage - siblingCountInternal],
			type: 'Center',
			currentPage,
			onChange,
		});
	}

	if (currentPage + siblingCountInternal >= totalPages) {
		return MountButton({
			data: [currentPage - siblingCountInternal + 1],
			type: 'Center',
			currentPage,
			onChange,
		});
	}

	return MountButton({
		data: [currentPage],
		type: 'Center',
		currentPage,
		onChange,
	});
}
