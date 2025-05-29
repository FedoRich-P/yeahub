import { ReactNode } from 'react';

interface Props {
	currentPage: number;
	onClick: (page: number) => void;
	children: ReactNode;
	disabled: boolean
}

export const PaginationArrowButton = ({ currentPage, onClick, children, disabled }: Props) => {
	return (
		<button
			className={`flex items-center justify-center w-6 h-8 rounded-lg ${
				disabled ? 'bg-gray-300' : 'bg-purple-600 hover:bg-purple-700 cursor-pointer'
			} text-white`}
			onClick={() => onClick(currentPage)}
			disabled={disabled}>
			{children}
		</button>
	);
};