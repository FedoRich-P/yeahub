import { FilterGroupType } from '@/features/questions-filters/model/types';

export const levelsFilters: FilterGroupType[] = [
	{ id: 1, label: '1-3', value: '1-3' },
	{ id: 2, label: '4-6', value: '4-6' },
	{ id: 3, label: '7-8', value: '7-8' },
	{	id: 4, label: '9-10', value: '9-10' },
];

export const ratingFilters: FilterGroupType[] = [
	{ id: 1, label: '1', value: '1' },
	{ id: 2, label: '2', value: '2' },
	{ id: 3, label: '3', value: '3' },
	{ id: 4, label: '4', value: '4' },
	{ id: 5, label: '5', value: '5' },
];

export const DEFAULT_LIMIT = 5;
