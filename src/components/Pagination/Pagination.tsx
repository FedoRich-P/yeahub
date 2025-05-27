import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useSearchParams } from 'react-router';

type Props = {
	totalPages: number;
	getPage: (page: number) => void;
	maxVisibleButtons?: number;
};

export function Pagination({ totalPages, getPage, maxVisibleButtons = 5 }: Props) {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchParams] = useSearchParams();


	const activePage = searchParams.get('page');


	if (totalPages <= 1) return null;

	function handlePageChange(page: number) {
		getPage(page);
		setCurrentPage(page);
	}

	const createPageNumbers = () => {
		const pages: (number | '...')[] = [];
		const sideButtons = Math.floor((maxVisibleButtons - 1) / 2);

		let start = Math.max(1, currentPage - sideButtons);
		let end = Math.min(totalPages, currentPage + sideButtons);

		if (currentPage - sideButtons < 1) {
			end = Math.min(totalPages, maxVisibleButtons);
		}

		if (currentPage + sideButtons > totalPages) {
			start = Math.max(1, totalPages - maxVisibleButtons + 1);
		}

		if (start > 1) {
			pages.push(1);
			if (start > 2) pages.push('...');
		}

		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		if (end < totalPages) {
			if (end < totalPages - 1) pages.push('...');
			pages.push(totalPages);
		}

		return pages;
	};

	const pageNumbers = createPageNumbers();

	function incrementPage() {
		if (currentPage < totalPages) {
			handlePageChange(currentPage + 1);
		}
	}

	function decrementPage() {
		if (currentPage > 1) {
			handlePageChange(currentPage - 1);
		}
	}

	return (
		<footer className="flex items-center space-x-3 mt-6 w-[600px] mx-auto">
			<button
				className={`flex items-center justify-center w-6 h-8 rounded-lg ${
					currentPage === 1 ? 'bg-gray-300' : 'bg-purple-600 hover:bg-purple-700'
				} text-white`}
				onClick={decrementPage}
				disabled={currentPage === 1}>
				<ArrowLeft className={'w-5 h-5'} />
			</button>

			<ul className="flex items-center justify-center gap-3 w-full overflow-hidden">
				{pageNumbers.map((page, index) =>
					page === '...' ? (
						<span
							key={`dots-${index}`}
							className="flex items-end px-2 text-gray-500"
						>
              ...
            </span>
					) : (
						<li key={index}>
							<button
								onClick={() => handlePageChange(page)}
								className={`flex items-center justify-center w-8 h-8 rounded-lg text-base transition-colors ${
									page === Number(activePage)
										? 'bg-purple-600 text-white'
										: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
								}`}>
								{page}
							</button>
						</li>
					)
				)}
			</ul>

			<button
				className={`flex items-center justify-center w-6 h-8 rounded-lg ${
					currentPage === totalPages ? 'bg-gray-300' : 'bg-purple-600 hover:bg-purple-700'
				} text-white`}
				onClick={incrementPage}
				disabled={currentPage === totalPages}>
				<ArrowRight className={'w-5 h-5'} />
			</button>
		</footer>
	);
}