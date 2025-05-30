import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SpecializationsResApi {
	page?: number;
	limit?: number
}

type FiltersType = {
	id: number;
	title: string | null;
	icon?: IconProp;
};

export type SpecializationsApiType = {
	data: FiltersType[];
	limit: number;
	page: number;
	total: number;
};