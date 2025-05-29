import { Outlet } from 'react-router';
import { QuestionsSidebar } from '@/widgets/QuestionsSidebar/QuestionsSidebar';

export function DefaultPageLayout() {
	return (
		<div className="grid grid-cols-[850px_390px] gap-5">
			<Outlet />
			<QuestionsSidebar />
		</div>
	);
}