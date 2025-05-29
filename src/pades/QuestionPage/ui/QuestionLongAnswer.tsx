import parse from 'html-react-parser';
import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface Props {
	longAnswer: string;
}

export function QuestionLongAnswer({ longAnswer }: Props) {
	const [expanded, setExpanded] = useState(false);
	return (
		<footer className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
			<h2 className="text-xl font-normal text-gray-800 mb-5">Развёрнутый ответ</h2>
			<div
				className={`whitespace-pre-line leading-relaxed relative ${
					!expanded ? 'max-h-30 overflow-hidden' : 'max-h-fit'
				}`}>
				{parse(longAnswer)}
			</div>
			<div className="text-center mt-3">
				<button
					className="text-base text-purple-600 hover:underline"
					onClick={() => setExpanded((p) => !p)}>
					{expanded ? (
						<span className={'flex items-center'}>
							Свернуть <ArrowUp className="w-4 h-5" />
						</span>
					) : (
						<span className={'flex items-center'}>
							Развернуть <ArrowDown className="w-4 h-5" />
						</span>
					)}
				</button>
			</div>
		</footer>
	);
}