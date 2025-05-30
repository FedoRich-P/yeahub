import { BrushCleaning, Search } from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from '@shared/lib/hooks/useDebounce';
import { useSearchParams } from 'react-router';

export function SearchQuestion() {
	const [searchValue, setSearchValue] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();

	const debouncedValue = useDebounce({ value: searchValue, delay: 500 });

	useEffect(() => {
		const newParams = new URLSearchParams(searchParams);

		if(debouncedValue) {
			newParams.set('title', debouncedValue);
			setSearchParams(newParams);
		}

	}, [debouncedValue]);

	function handleGetInputValue(e: ChangeEvent<HTMLInputElement>) {
		setSearchValue(e.target.value.toLowerCase());
	}

	function clearValue() {
		setSearchValue('');
		const newParams = new URLSearchParams(searchParams);
		newParams.delete('title');
		setSearchParams(newParams);
	}

	return (
		<div className="flex items-center gap-2 py-2 px-6 border border-gray-300 rounded-lg text-gray-400">
			<Search
				className="w-5 h-5"
				aria-hidden="true"
			/>
			<input
				type="text"
				placeholder="Введите запрос ..."
				className="w-full outline-none"
				value={searchValue}
				onChange={handleGetInputValue}
			/>
			{searchValue && (
				<BrushCleaning
					onClick={clearValue}
					className="w-6 h-6 cursor-pointer"
					aria-hidden="true"
				/>
			)}
		</div>
	);
}
