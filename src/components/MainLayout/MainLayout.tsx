import { Header } from '@components/Header/Header';
import { Sidebar } from '@components/Sidebar/Sidebar';
import { Footer } from '@components/Footer/Footer';
import { Outlet } from 'react-router';

export function MainLayout() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-50">
			<Header />
			<main className="max-w-screen-xl w-full mx-auto flex flex-col lg:flex-row py-10 px-6 lg:space-x-8">
				<section className="w-full">
					<Outlet />
				</section>
				<Sidebar />
			</main>
			<Footer />
		</div>
	);
}
