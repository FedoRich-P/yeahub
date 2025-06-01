import { createBrowserRouter } from 'react-router';
import { MainLayout } from '@/app/layouts/MainLayout';
import { DefaultPageLayout } from '@/app/layouts/DefaultPageLayout';
import { QuestionWrapper, QuestionPage } from '@/pades/QuestionPage';
import { MainPage } from '@/pades/MainPage';
import { NotFoundPage } from '@/pades/NotFoundPage';
import { QuestionsPage } from '@/pades/QuestionsPage';
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
				Component: QuestionWrapper,
				children: [{ index: true, Component: QuestionPage }],
			},
			{ path: '*', Component: NotFoundPage },
		],
	},
]);
