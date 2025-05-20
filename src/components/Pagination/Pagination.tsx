import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

type Props = {
	totalPages: number;
	getPage: (page: number) => void;
	maxVisibleButtons?: number;
};

export function Pagination({ totalPages, getPage, maxVisibleButtons = 5 }: Props) {
	const [currentPage, setCurrentPage] = useState(1);

	function handlePageChange(page: number) {
		getPage(page);
		setCurrentPage(page);
	}

	const createPageNumbers = () => {
		const pages: (number | '...')[] = [];

		if (totalPages <= maxVisibleButtons + 2) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			const sideButtons = Math.floor((maxVisibleButtons - 1) / 2);

			const start = Math.max(2, currentPage - sideButtons);
			const end = Math.min(totalPages - 1, currentPage + sideButtons);

			pages.push(1);

			if (start > 2) {
				pages.push('...');
			}

			for (let i = start; i <= end; i++) {
				pages.push(i);
			}

			if (end < totalPages - 1) {
				pages.push('...');
			}

			pages.push(totalPages);
		}

		return pages;
	};

	const pageNumbers = createPageNumbers();

	function incrementPage() {
		if (totalPages > currentPage) {
			setCurrentPage((prevState) => prevState + 1)
		}
	}

	function decrementPage() {
		if(currentPage > 1) {
			setCurrentPage((prevState) => prevState - 1)
		}
	}

	return (
		<footer className="flex items-center space-x-3 mt-6 w-[600px] mx-auto">
			<button
				className={'flex items-center justify-center w-12 h-12 rounded-lg  bg-purple-600 text-white'}
				onClick={decrementPage}>
				<ArrowLeft />
			</button>
			<ul className={'flex items-center justify-center gap-3 w-full overflow-hidden'}>
				{pageNumbers.map((page, index) =>
					page === '...' ? (
						<span key={`dots-${index}`}>...</span>
					) : (
						<li key={index}>
							<button
								onClick={() => handlePageChange(page)}
								className={`flex items-center justify-center w-12 h-12 rounded-lg ${page === currentPage ? 'bg-purple-600 text-white' : 'bg-white border border-gray-300 text-gray-700 p-1.5'}`}>
								{page}
							</button>
						</li>
					),
				)}
			</ul>
			<button
				className={'flex items-center justify-center w-12 h-12 rounded-lg  bg-purple-600 text-white'}
				onClick={incrementPage}>
				<ArrowRight />
			</button>
		</footer>
	);
}

// interface PaginationProps {
// 	totalPages: number | undefined;
// 	// currentPage: number;
// 	getPage: (page: number) => void;
// 	maxVisibleButtons?: number; // например: 5
// }
//
// export const Pagination: React.FC<PaginationProps> = ({
// 	totalPages = 2,
// 	// currentPage = 1,
// 	getPage,
// 	maxVisibleButtons = 7,
// }) => {
// 	return (
// 		<div style={{ display: 'flex', gap: '8px' }}>
// 			{pageNumbers.map((page, index) =>
// 				page === '...' ? (
// 					<span key={`dots-${index}`}>...</span>
// 				) : (
// 					<button
// 						key={page}
// 						onClick={() => onPageChange(page)}
// 						style={{
// 							padding: '4px 8px',
// 							fontWeight: page === currentPage ? 'bold' : 'normal',
// 							border: '1px solid #ccc',
// 							borderRadius: '4px',
// 							backgroundColor: page === currentPage ? '#ddd' : '#fff',
// 						}}>
// 						{page}
// 					</button>
// 				),
// 			)}
// 		</div>
// 	);
// };
