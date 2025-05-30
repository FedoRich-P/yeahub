import { Pagination } from '@shared/ui/Pagination/Pagination';
import { QuestionCard } from '@/entities/question/ui/QuestionCard';
import { useGetQuestionsQuery } from '@/entities/question/api/questionsApi';
import { useQuestionFiltersFromUrl } from '@/pades/QuestionsPage/model/useQuestionFiltersFromUrl';
import { useSearchParams } from 'react-router';
import { NotFound } from '@/pades/NotFoundPage';

export function QuestionsPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const { page, specialization, skills, complexity, rate, title } = useQuestionFiltersFromUrl();

	const { data } = useGetQuestionsQuery({ page, specialization, skills, complexity, rate, limit: 10, title });

	const totalPages = data ? Math.ceil(data.total / data.limit) : 0;

	const setPage = (newPage: number) => {
		searchParams.set('page', newPage.toString());
		setSearchParams(searchParams);
	};

	if (!data) return <NotFound />;

	return (
		<section className="lg:pr-8 bg-white rounded-lg p-4">
			<h2 className="text-xl font-light border-b-2 border-main-border pb-3">Вопросы React, JavaScript</h2>
			{data?.data.length > 0 && (
				<>
					{data.data.map((question) => (
						<QuestionCard
							key={question.id}
							question={question}
						/>
					))}
					<Pagination
						totalPages={totalPages}
						getPage={setPage}
					/>
				</>
			)}
		</section>
	);
}
