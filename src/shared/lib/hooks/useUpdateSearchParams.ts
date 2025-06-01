import { useSearchParams } from 'react-router';
import { updateSearchParams } from '@/shared';

export const useUpdateSearchParams = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (newValues: Record<string, string | null>) => {
		const updated = updateSearchParams({ params: searchParams, newValues });
		setSearchParams(updated);
	};
};