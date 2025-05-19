import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCss3Alt, faFigma, faHtml5, faJs, faReact, faRProject } from '@fortawesome/free-brands-svg-icons';

export type FilterOption = {
	label: string;
	value: string;
	icon?: IconProp;
};

export const sampleQuestions = Array.from({ length: 12 }, (_, i) => ({
	id: i + 1,
	title: 'Что такое Virtual DOM, и как он работает?',
	description:
		'Virtual DOM (виртуальный DOM) — это программная концепция, используемая в разработке веб-приложений для повышения эффективности обновлений интерфейса. Это представление реального DOM (структуры документа, отображаемого в браузере) в памяти, которое позволяет оптимизировать изменения, минимизируя взаимодействие с реальным DOM, что ускоряет рендеринг и обновление страниц. При изменении данных приложения Virtual DOM сравнивает новое состояние с предыдущим и обновляет только течасти реального DOM, которые изменились, вместо перерисовки всего документа.',
	tags: ['UI/UX designer', 'Frontend developer', 'Backend developer', 'Fullstack'],
	skills: ['Figma', 'Wireframing', 'CSS', 'HTML', 'React.js'],
	rating: 4,
	complexity: 10,
	imageUrl: '/placeholder.png',
}));

export const specializationFilters: FilterOption[] = [
	{ label: 'UI/UX designer', value: 'uiux' },
	{ label: 'Frontend developer', value: 'frontend' },
	{ label: 'Backend developer', value: 'backend' },
	{ label: 'Fullstack', value: 'fullstack' },
	{ label: 'Software tester', value: 'tester' },
];

export const skillsFilters: FilterOption[] = [
	{ label: 'HTML', value: 'html', icon: faHtml5 },
	{ label: 'CSS', value: 'css', icon: faCss3Alt },
	{ label: 'React.js', value: 'react', icon: faReact },
	{ label: 'JS', value: 'js', icon: faJs },
	{ label: 'Figma', value: 'figma', icon: faFigma },
	{ label: 'Wireframing', value: 'wireframing', icon: faRProject },
];

export const levelsFilters: FilterOption[] = [
	{ label: '1-3', value: '1-3' },
	{ label: '4-6', value: '4-6' },
	{ label: '7-8', value: '7-8' },
	{ label: '9-10', value: '9-10' },
];

export const ratingFilters: FilterOption[] = [
	{ label: '1', value: '1' },
	{ label: '2', value: '2' },
	{ label: '3', value: '3' },
	{ label: '4', value: '4' },
	{ label: '5', value: '5' },
];
