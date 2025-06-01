import { Outlet, useNavigate } from 'react-router';
import { QuestionSidebar } from '@/widgets/QuestionSidebar/QuestionSidebar';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

export function QuestionWrapper() {
	const navigate = useNavigate();
	return (
		<>
			<button
				className={
					'self-start mb-5 text-lg flex items-center gap-2 cursor-pointer text-purple font-medium border-b-2 border-transparent hover:border-inherit transition-all duration-500'
				}
				onClick={() => navigate(-1)}>
				<ArrowLeftCircleIcon className="w-6 h-6" />
				Назад
			</button>
			<div className="grid grid-cols-[850px_390px] gap-5">
				<Outlet />
				<QuestionSidebar />
			</div>
		</>
	);
}
