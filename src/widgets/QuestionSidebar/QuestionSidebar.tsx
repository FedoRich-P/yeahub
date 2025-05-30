import { Link, useParams } from 'react-router';
import { QuestionSkill } from '@shared/types';
import { QuestionBadge } from '@shared/ui/QuestionBadge';
import { useGetQuestionByIdQuery } from '@/pades/QuestionPage/api/questionApi';

export function QuestionSidebar() {
	const { id } = useParams();

	const { data: question, isLoading } = useGetQuestionByIdQuery({ id });

	if (isLoading || !question) {
		return <div className="text-center text-gray-600">Загрузка...</div>;
	}

	return (
		<aside className="flex flex-col gap-3 w-full max-w-[400px]">
			<section className="bg-white p-6 rounded-xl shadow-md">
				<header className="mb-4">
					<h2 className="text-lg font-semibold text-gray-800">Информация о вопросе</h2>
				</header>

				<div className="mb-6">
					<h3 className="text-sm text-gray-500 mb-2">Уровень</h3>
					<ul className="flex flex-wrap gap-4">
						<QuestionBadge label="Сложность" value={question.complexity} />
						<QuestionBadge label="Рейтинг" value={question.rate} />
					</ul>
				</div>

				{question.questionSkills?.length > 0 && (
					<div className="mb-6">
						<h3 className="text-sm text-gray-500 mb-2">Навыки:</h3>
						<ul className="flex flex-wrap gap-2">
							{question.questionSkills.map((q: QuestionSkill) => (
								<li
									key={q.id}
									className="flex items-center gap-2 border border-purple-600 text-purple-600 text-sm px-3 py-2 rounded-md">
									{question.imageSrc && (
										<img
											src={question.imageSrc}
											alt=""
											className="w-4 h-4 object-cover rounded-full"
										/>
									)}
									<span>{q.title}</span>
								</li>
							))}
						</ul>
					</div>
				)}

				{question.keywords?.length > 0 && (
					<div className="mb-4">
						<h3 className="text-sm text-gray-500 mb-2">Ключевые слова:</h3>
						<ul className="flex flex-wrap gap-2">
							{question.keywords.map((kw: string, i: number) => (
								<li
									key={i}
									className="inline-block text-base text-purple-600">
									<Link to={'/'}>#{kw}</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</section>

			<footer className="text-center text-sm text-gray-800 mt-4">
				Автор: <span className="text-purple-700 font-medium">{question.createdBy?.username}</span>
			</footer>
		</aside>
	);
}