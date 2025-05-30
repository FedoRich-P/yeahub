import { createBrowserRouter } from 'react-router';
import { QuestionsPage } from '@/pades/QuestionsPage';
import { QuestionPage } from '@/pades/QuestionPage';
import { MainPage } from '@/pades/MainPage';
import { MainLayout } from '@/app/layouts/MainLayout';
import { DefaultPageLayout } from '@/app/layouts/DefaultPageLayout';
import { QuestionLayout } from '@/pades/QuestionPage/ui/QuestionLayout';
import { NotFound } from '@/pades/NotFoundPage';
import { TrainingPage } from '@/pades/TrainingPage';

export const PATH = {
	MAIN: '/',
	TRAINING: 'training',
	QUESTIONS: 'questions/public-questions',
	QUESTION_ID: 'questions/public-questions/:id',
} as const;

export const router = createBrowserRouter([
	{
		path: '/',
		Component: MainLayout,
		children: [
			{ index: true, Component: MainPage },
			{ path: PATH.TRAINING, Component: TrainingPage },
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
