interface Props {
	imageSrc: string;
	title: string;
	description: string;
}


export function QuestionHeader({ imageSrc, title, description }: Props) {
	return (
		<header className="flex w-full gap-4 bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
			<img
				src={imageSrc}
				alt={title}
				className="w-[170px] h-[114px] object-cover rounded-xl flex-shrink-0 bg-purple-200"
			/>
			<div className="flex flex-col">
				<h2 className="text-2xl font-medium text-gray-800 mb-1">{title}</h2>
				<p className="text-base text-gray-600">{description}</p>
			</div>
		</header>
	);
}