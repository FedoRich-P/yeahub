import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { clearSearchParam, SearchInput } from '@/features/search-questions';
import { useDebounce } from '@/shared';

export function SearchQuestion() {
	const [searchValue, setSearchValue] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();

	const debouncedValue = useDebounce({ value: searchValue, delay: 500 });

	useEffect(() => {
		const newParams = new URLSearchParams(searchParams);

		if (debouncedValue) {
			newParams.set('title', debouncedValue);
			setSearchParams(newParams);
		}
	}, [debouncedValue]);

	function handleGetInputValue(e: ChangeEvent<HTMLInputElement>) {
		setSearchValue(e.target.value.toLowerCase());
	}

	function handleClearInput() {
		clearSearchParam({ setSearchValue, searchParams, setSearchParams });
	}

	return (
		<SearchInput
			value={searchValue}
			onChange={handleGetInputValue}
			onClear={handleClearInput}
		/>
	);
}
