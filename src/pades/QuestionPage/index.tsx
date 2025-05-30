import { useParams } from 'react-router';
import { useGetQuestionByIdQuery } from '@/pades/QuestionPage/api/questionApi';
import { QuestionHeader } from '@/pades/QuestionPage/ui/QuestionHeader';
import { QuestionShortAnswer } from '@/pades/QuestionPage/ui/QuestionShortAnswer';
import { QuestionLongAnswer } from '@/pades/QuestionPage/ui/QuestionLongAnswer';
import { NotFound } from '@/pades/NotFoundPage';

export function QuestionPage() {
	const { id } = useParams();

	const { data: question, error } = useGetQuestionByIdQuery({ id });

	if (error) return <NotFound/>;
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