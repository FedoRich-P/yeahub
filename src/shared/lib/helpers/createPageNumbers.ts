interface Props {
	currentPage: number,
	totalPages: number,
	maxVisibleButtons: number
}

export function createPageNumbers({	currentPage, totalPages, maxVisibleButtons = 5}: Props): (number | '...')[] {
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
}