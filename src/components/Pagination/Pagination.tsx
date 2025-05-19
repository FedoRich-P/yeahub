import { ArrowLeft, ArrowRight } from 'lucide-react';

export function Pagination() {
	return (
		<div className="flex justify-center items-center space-x-3 mt-6">
			<button className="w-8 h-8 flex items-center justify-center bg-white border border-purple rounded-full text-purple">
				<ArrowLeft />
			</button>
			{[1, 2, 3, 4, 5].map(page => (
				<button
					key={page}
					className={`w-8 h-8 flex items-center justify-center rounded-lg ${page === 1 ? 'bg-purple-600 text-white' : 'bg-white border border-gray-300 text-gray-700 p-1.5'}`}
				>
					{page}
				</button>
			))}
			<button className="w-8 h-8 flex items-center justify-center bg-white border border-purple rounded-full text-purple">
				<ArrowRight />
			</button>
		</div>
	);
}