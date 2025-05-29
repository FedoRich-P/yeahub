import { createBrowserRouter } from 'react-router';
import { QuestionsPage } from '@/pades/QuestionsPage';
import { NotFound } from '@shared/ui/NotFound';
import { QuestionPage } from '@/pades/QuestionPage';
import { MainPage } from '@/pades/MainPage';
import { MainLayout } from '@/app/layouts/MainLayout';
import { DefaultPageLayout } from '@/app/layouts/DefaultPageLayout';
import { QuestionLayout } from '@/pades/QuestionPage/ui/QuestionLayout';

export const PATH = {
	MAIN: '/',
	QUESTIONS: 'questions/public-questions',
	QUESTION_ID: 'questions/public-questions/:id',
} as const;

export const router = createBrowserRouter([
	{
		path: '/',
		Component: MainLayout,
		children: [
			{ index: true, Component: MainPage },
			{
				Component: DefaultPageLayout,
				children: [{ path: PATH.QUESTIONS, Component: QuestionsPage }],
			},
			{
				path: PATH.QUESTION_ID,
				Component: QuestionLayout,
				children: [{ index: true, Component: QuestionPage }],
			},
			{ path: '*', Component: NotFound },
		],
	},
]);
