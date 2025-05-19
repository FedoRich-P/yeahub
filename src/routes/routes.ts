import { createBrowserRouter } from 'react-router';
import { MainLayout } from '@components/MainLayout/MainLayout';
import { QuestionsPage } from '@/pades/QuestionsPage';
import { NotFound } from '@/pades/NotFound';

export const router = createBrowserRouter([
	{
		path: '/',
		Component: MainLayout,
		children: [
			{index: true, Component: QuestionsPage},
			{path: '*', Component: NotFound}
		]
	}
])