import { QuestionsPage } from '@/pades/QuestionsPage';
import { Route, Routes } from 'react-router';
import { MainLayout } from '@components/MainLayout/MainLayout';
import { NotFound } from '@/pades/NotFound';

function App() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route
					path="/"
					element={<QuestionsPage />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
