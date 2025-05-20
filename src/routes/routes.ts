import { createBrowserRouter } from 'react-router';
import { MainLayout } from '@components/MainLayout/MainLayout';
import { QuestionsPage } from '@/pades/QuestionsPage';
import { NotFound } from '@/pades/NotFound';
import { QuestionPage } from '@/pades/QuestionPage';

export const router = createBrowserRouter([
	{
		path: '/',
		Component: MainLayout,
		children: [
			{index: true, Component: QuestionsPage},
			{path: '/question/:id', Component: QuestionPage},
			{path: '*', Component: NotFound}
		]
	}
])