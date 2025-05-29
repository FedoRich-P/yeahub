import parse from 'html-react-parser';

interface Props {
	shortAnswer: string;
}


export function QuestionShortAnswer({ shortAnswer }: Props) {
	return (
		<section className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
			<h2 className="text-xl font-normal text-gray-800 mb-5">Краткий ответ</h2>
			<div className="whitespace-pre-line leading-relaxed">{parse(shortAnswer)}</div>
		</section>
	);
}