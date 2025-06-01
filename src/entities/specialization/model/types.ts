
import { FiltersType } from '@/entities/skills';

export interface SpecializationsResApi {
	page?: number;
	limit?: number
}

export type SpecializationsApiType = {
	data: FiltersType[];
	limit: number;
	page: number;
	total: number;
};