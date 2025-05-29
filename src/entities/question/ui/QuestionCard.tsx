import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { NavLink } from 'react-router';
import { Question } from '@/services/types';
import { PATH } from '@/app/routes/routes';
import { QuestionBadge } from '@shared/ui/QuestionBadge';

interface Props  {
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
				<span className="text-lg text-start font-medium line-clamp-1 pr-1">{question.title}</span>
				{open ? <ChevronUp className={'w-5 h-5 shrink-0 text-purple'} /> : <ChevronDown className={'w-5 h-5 shrink-0 text-purple'} />}
			</button>
			{open && (
				<div className="px-6 pb-6 space-y-4 flex flex-col">
					<ul className="flex justify-between text-sm text-gray-600 self-start gap-10">
						<QuestionBadge label="Рейтинг" value={question.rate} />
						<QuestionBadge label="Сложность" value={question.complexity} />
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
						to={`/${PATH.QUESTIONS}/${question.id}`}
						className={`text-purple-600 hover:underline text-sm flex items-center gap-2 self-end`}>
						Подробнее <ArrowRight className={'h-4 w-4'} />
					</NavLink>
				</div>
			)}
		</article>
	);
}
