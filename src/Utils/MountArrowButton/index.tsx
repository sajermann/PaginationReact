type Props = {
	icon: string;
	onClick: () => void;
	disabled?: boolean;
};

export default function MountArrowButton({
	onClick,
	disabled,
	icon,
}: Props): JSX.Element {
	return (
		<button
			type="button"
			disabled={disabled}
			onClick={onClick}
			className="button"
		>
			{icon}
		</button>
	);
}
