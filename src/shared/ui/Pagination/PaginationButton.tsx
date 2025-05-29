interface Props {
	page: number;
	isActive: boolean;
	onClick: (page: number) => void;
};

export const PaginationButton = ({ page, isActive, onClick }: Props) => {
	return (
		<button
			onClick={() => onClick(page)}
			className={`flex items-center justify-center w-8 h-8 rounded-lg text-base transition-colors ${
				isActive
					? 'bg-purple-600 text-white'
					: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer'
			}`}>
			{page}
		</button>
	);
};