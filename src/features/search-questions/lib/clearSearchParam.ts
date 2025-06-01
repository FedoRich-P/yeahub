import { SetURLSearchParams } from 'react-router';

interface Props {
	setSearchValue: (value: string) => void;
	searchParams: URLSearchParams;
	setSearchParams: SetURLSearchParams
}

export function clearSearchParam({setSearchValue, searchParams, setSearchParams}: Props) {
	setSearchValue('');
	const newParams = new URLSearchParams(searchParams);
	newParams.delete('title');
	setSearchParams(newParams);
}