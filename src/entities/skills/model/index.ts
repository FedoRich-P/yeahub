import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SkillsApi {
	page?: number;
	limit?: number;
	specializations: number | null;
}

export type FiltersType = {
	id: number;
	title: string | null;
	icon?: IconProp;
};

export type SkillsApiType = {
	data: FiltersType[];
	limit: number;
	page: number;
	total: number;
};