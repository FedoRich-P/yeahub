export interface QuestionApi {
	page: string,
	limit?: number,
	specialization: string,
	skills: string[] ,
	complexity: string[],
	rate: string[],
	title: string
}