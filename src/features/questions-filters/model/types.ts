import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type FiltersType = {
	id: number;
	title: string | null;
	icon?: IconProp;
};

export type FilterGroupType = {
	id: number
	label: string;
	value: string;
};

export type SpecializationsApiType = {
	data: FiltersType[];
	limit: number;
	page: number;
	total: number;
};