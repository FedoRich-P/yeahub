import { Pagination } from '@components/Pagination/Pagination';
import { QuestionCard } from '@components/QuestionCard/QuestionCard';
import { sampleQuestions } from '@/constants';

export type Question = {
	id: number;
	title: string;
	description: string;
	tags: string[];
	skills: string[];
	rating: number;
	complexity: number;
	imageUrl: string;
};

export function QuestionsPage() {
	return (
		<section className="flex-1 lg:pr-8 bg-white rounded-lg p-4 w-full">
			<h2 className="text-xl font-light border-b-2 border-main-border pb-3">Вопросы React, JavaScript</h2>
			{sampleQuestions.map((question) => (
				<QuestionCard
					key={question.id}
					question={question}
				/>
			))}
			<Pagination />
		</section>
	);
}
