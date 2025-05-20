import { useGetQuestionByIdQuery } from '@/services/questions';
import { useParams } from 'react-router';

export function QuestionPage() {
	const { id } = useParams();

	const { data } = useGetQuestionByIdQuery({ id });

	if(!data) return <h1>...</h1>

	console.log(data);

	return (
		<section className="lg:pr-8 bg-white rounded-lg p-4">
			<h2 className="text-xl font-light border-b-2 border-main-border pb-3">Вопросы React, JavaScript</h2>
			<h3>{`${data.longAnswer}`}</h3>
		</section>
	);
}
