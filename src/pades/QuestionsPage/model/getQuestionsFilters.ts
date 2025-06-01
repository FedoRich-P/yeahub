import { useQuestionFiltersFromUrl } from '@/pades/QuestionsPage';


export const useQuestionsQueryParams = () => {
	const filters = useQuestionFiltersFromUrl();
	return { ...filters, limit: 10 };
};