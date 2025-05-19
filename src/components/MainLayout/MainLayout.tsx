import { Header } from '@components/Header/Header';
import { Sidebar } from '@components/Sidebar/Sidebar';
import { Footer } from '@components/Footer/Footer';
import { Outlet } from 'react-router';

export function MainLayout() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-50 gap-5">
			<Header />
			<main className="max-w-screen-xl w-full mx-auto grid grid-cols-[1fr_390px] gri gap-5">
				<Outlet />
				<Sidebar />
			</main>
			<Footer />
		</div>
	);
}
