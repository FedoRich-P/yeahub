import { ArrowLeft, ArrowRight } from 'lucide-react';

type Props = {
	pages: number;
};

export function Pagination({ pages }: Props) {

	return (
		<footer className="flex items-baseline space-x-3 mt-6 max-w-[450px] mx-auto">
			<button className="w-8 h-8 flex items-center justify-center bg-white border border-purple rounded-full text-purple">
				<ArrowLeft />
			</button>
			<ul className={'flex items-center justify-center gap-3 overflow-x-auto'}>
				{Array.from({ length: pages }).map((_, index) => (
					<li key={index}>
						<button
							className={`flex items-center justify-center rounded-lg ${index + 1 === 1 ? 'bg-purple-600 text-white' : 'bg-white border border-gray-300 text-gray-700 p-1.5'}`}>
							{index + 1}
						</button>
					</li>
				))}
			</ul>
			<button className="w-8 h-8 flex items-center justify-center bg-white border border-purple rounded-full text-purple">
				<ArrowRight />
			</button>
		</footer>
	);
}
