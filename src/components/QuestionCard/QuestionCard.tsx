import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { NavLink } from 'react-router';
import { Question } from '@/services/types';

type Props = {
	question: Question;
};

export function QuestionCard({ question }: Props) {
	const [open, setOpen] = useState(false);

	if (!question) return <h2>...</h2>;
	return (
		<article className="bg-white border-b-2 border-main-border mb-4 w-full">
			<button
				className="w-full flex justify-between items-center px-6 py-4 cursor-pointer"
				onClick={() => setOpen(!open)}>
				<h3 className="text-lg font-medium line-clamp-1 pr-1">{question.title}</h3>
				{open ? <ChevronUp className={'w-5 h-5 text-purple'} /> : <ChevronDown className={'w-5 h-5 text-purple'} />}
			</button>
			{open && (
				<div className="px-6 pb-6 space-y-4 flex flex-col">
					<ul className="flex justify-between text-sm text-gray-600 self-start gap-10">
						<li className={'bg-main-border rounded-md p-2'}>
							Рейтинг : <span className="bg-purple p-1 rounded-md text-main-text">{question.rate}</span>
						</li>
						<li className={'bg-main-border rounded-md p-2'}>
							Сложность : <span className="bg-purple p-1 rounded-md text-main-text">{question.complexity}</span>
						</li>
					</ul>
					{question.imageSrc && (
						<img
							src={question.imageSrc}
							alt="JS code"
							className={'h-[312px] w-[70%] block rounded-lg overflow-hidden bg-purple'}
						/>
					)}
					<p className="text-gray-700 text-sm leading-relaxed">{question.description}</p>
					<NavLink
						to={`question/${question.id}`}
						className="text-purple-600 hover:underline text-sm flex items-center gap-2 self-end">
						Подробнее <ArrowRight className={'h-4 w-4'} />
					</NavLink>
				</div>
			)}
		</article>
	);
}
