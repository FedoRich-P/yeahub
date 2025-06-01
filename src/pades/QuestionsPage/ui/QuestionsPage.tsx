import { useGetQuestionsQuery } from '@/entities/question';
import { NotFoundPage } from '@/pades/NotFoundPage';
import { QuestionsList, useQuestionsQueryParams } from '@/pades/QuestionsPage';
import { calculateTotalPages, useUpdateSearchParams } from '@/shared';

export function QuestionsPage() {
	const setSearchParamsSmart = useUpdateSearchParams();
	const queryParams = useQuestionsQueryParams();
	const { data } = useGetQuestionsQuery(queryParams);

	const setPage = (newPage: number) => {
		setSearchParamsSmart({ page: newPage.toString() });
	};

	if (!data) return <NotFoundPage />;

	return (
		<QuestionsList
			questions={data.data}
			totalPages={calculateTotalPages({total:data.total , limit: data.limit})}
			setPage={setPage}
		/>
	);
}
