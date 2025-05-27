import { useGetQuestionByIdQuery } from '@/services/questions';
import { useParams } from 'react-router';
import parse from 'html-react-parser';

export function QuestionPage() {
	const { id } = useParams();

	const { data } = useGetQuestionByIdQuery({ id });

	if(!data) return <h1>...</h1>

	return (
		<section className="lg:pr-8 bg-white rounded-lg p-4 overflow-hidden">
			<h2 className="text-xl font-light border-b-2 border-main-border pb-3">Вопросы React, JavaScript</h2>
			<p className="block p-2 rounded-md text-gray-700 whitespace-pre-line">
				{parse(data.longAnswer)}
			</p>
		</section>
	);
}
