import { Pagination } from '@components/Pagination/Pagination';
import { QuestionCard } from '@components/QuestionCard/QuestionCard';
import { useGetQuestionsQuery } from '@/services/questions';
import { useState } from 'react';

export function QuestionsPage() {
	const [page, setPage] = useState(2);

	const { data } = useGetQuestionsQuery({ page });

	function handlePageChange(page: number) {
		setPage(page);
	}

	return (
		<section className="lg:pr-8 bg-white rounded-lg p-4">
			<h2 className="text-xl font-light border-b-2 border-main-border pb-3">Вопросы React, JavaScript</h2>
			{data &&
				data.data.map((question) => (
					<QuestionCard
						key={question.id}
						question={question}
					/>
				))}
			<Pagination totalPages={data ? Math.ceil(data.total / data.limit) : 0}  getPage={handlePageChange}/>
		</section>
	);
}
