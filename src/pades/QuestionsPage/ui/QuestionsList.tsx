import { QuestionCard } from '@/entities/question';
import { Pagination } from '@/shared';
import { Question } from '@shared/types';

interface Props {
	questions: Question[];
	totalPages: number;
	setPage: (page: number) => void;
}

export function QuestionsList({ questions, totalPages, setPage }: Props) {
	if (!questions.length) return <h2>"Ничего не найдено"</h2>;
	return (
		<section className="lg:pr-8 bg-white rounded-lg p-4">
			<h2 className="text-xl font-light border-b-2 border-main-border pb-3">Вопросы React, JavaScript</h2>

			<>
				{questions.map((question) => (
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
		</section>
	);
}
