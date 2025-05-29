import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';
import { Outlet } from 'react-router';

export function MainLayout() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-50 gap-5">
			<Header />
			<main className="max-w-screen-xl w-full h-full flex-1 flex flex-col mx-auto">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
