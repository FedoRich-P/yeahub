import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { createPageNumbers, PaginationArrowButton, PaginationButton } from '@/shared';

interface Props {
	totalPages: number;
	getPage: (page: number) => void;
	maxVisibleButtons?: number;
}

export function Pagination({ totalPages, getPage, maxVisibleButtons = 5 }: Props) {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchParams] = useSearchParams();
	const activePage = Number(searchParams.get('page')) || 1;

	useEffect(() => {
		setCurrentPage(activePage);
	}, [activePage]);

	if (totalPages <= 1) return null;

	const handlePageChange = (page: number) => {
		getPage(page);
		setCurrentPage(page);
	};

	const pageNumbers = createPageNumbers({ currentPage, totalPages, maxVisibleButtons });

	return (
		<footer className="flex items-center space-x-3 mt-6 w-[600px] mx-auto">
			<PaginationArrowButton
				currentPage={currentPage}
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}>
				<ArrowLeft className={'w-5 h-5'} />
			</PaginationArrowButton>
			<ul className="flex items-center justify-center gap-3 w-full overflow-hidden">
				{pageNumbers.map((page, index) =>
					page === '...' ? (
						<span
							key={`dots-${index}`}
							className="flex items-end px-2 text-gray-500">
							...
						</span>
					) : (
						<li key={index}>
							<PaginationButton
								page={page}
								isActive={page === activePage}
								onClick={handlePageChange}
							/>
						</li>
					),
				)}
			</ul>
			<PaginationArrowButton
				currentPage={currentPage}
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}>
				<ArrowRight className={'w-5 h-5'} />
			</PaginationArrowButton>
		</footer>
	);
}
