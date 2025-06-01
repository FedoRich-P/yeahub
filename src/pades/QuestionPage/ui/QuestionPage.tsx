import { useParams } from 'react-router';
import { QuestionHeader, QuestionLongAnswer, QuestionShortAnswer, useGetQuestionByIdQuery } from '@/pades/QuestionPage';
import { NotFoundPage } from '@/pades/NotFoundPage';

export function QuestionPage() {
	const { id } = useParams();

	const { data: question, error } = useGetQuestionByIdQuery({ id });

	if (error) return <NotFoundPage />;
	if (!question) return <>...</>;

	return (
		<section className={'flex flex-col gap-6'}>
			<h1 className={'sr-only'}>Главная страница вопроса - {question.title}</h1>
			<article className={'flex flex-col gap-6'}>
				<QuestionHeader
					title={question.title}
					description={question.description}
					imageSrc={question.imageSrc}
				/>
				<QuestionShortAnswer shortAnswer={question.shortAnswer} />
				<QuestionLongAnswer longAnswer={question.longAnswer} />
			</article>
		</section>
	);
}
