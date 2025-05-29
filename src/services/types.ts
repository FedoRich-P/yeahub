export type User = {
	id: string;
	username: string;
}

export type QuestionSpecialization ={
	id: number;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
}


export type QuestionSkill = {
	id: number;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
}


export type Question ={
	id: number;
	title: string;
	description: string;
	code: string;
	imageSrc: string;
	keywords: string[];
	longAnswer: string;
	shortAnswer: string;
	status: 'public' | 'private' | string;
	complexity: number;
	rate: number;
	createdById: string;
	updatedById: string;
	createdBy: User;
	updatedBy: User;
	questionSpecializations: QuestionSpecialization[];
	questionSkills: QuestionSkill[];
	createdAt: string;
	updatedAt: string;
}

export type PaginatedQuestionsResponse ={
	data: Question[];
	total: number;
	page: number;
	limit: number;
}