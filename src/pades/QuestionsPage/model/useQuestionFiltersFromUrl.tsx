import { useSearchParams } from 'react-router';

export function useQuestionFiltersFromUrl() {
	const [searchParams] = useSearchParams();

	return {
		page: searchParams.get('page') || '1',
		specialization: searchParams.get('specialization') || '',
		skills: searchParams.get('skills')?.split(',') || [],
		complexity: searchParams.get('complexity')?.split(',') || [],
		rate: searchParams.get('rate')?.split(',') || [],
	};
}