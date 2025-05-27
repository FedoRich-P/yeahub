import { Search } from 'lucide-react';
import { useGetSkillsQuery, useGetSpecializationsQuery } from '@/services/specializations';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/app/hooks';
import { setSkills, setSpecializations } from '@/features/questions/questionsSlice';
import { SpecializationFilter } from '@components/FilterGroup/SpecializationFilter';
import { SkillsFilter } from '@components/FilterGroup/SkillsFilter';

export function Sidebar() {
	const [specializationsLimit, setSpecializationsLimit] = useState<number>(5);
	const [skillsLimit, setSkillsLimit] = useState<number>(5);
	const [skillsIds, setSkillsIds] = useState<number | null>(null);
	const [specializationsIds, setSpecializationsIds] = useState<number | null>(null);

	const dispatch = useAppDispatch();

	const { data: specializationFilters } = useGetSpecializationsQuery({ page: 1, limit: specializationsLimit });
	const { data: skills } = useGetSkillsQuery({ page: 1, limit: skillsLimit, specializations: specializationsIds });

	// console.log('skills', skills);

	useEffect(() => {
		dispatch(setSkills(skillsIds));
	}, [skillsIds, dispatch]);

	useEffect(() => {
		dispatch(setSpecializations(specializationsIds));
	}, [specializationsIds, dispatch]);

	function handleGetSpecId(id: number) {
		setSpecializationsIds(id);
	}

	function handleGetSkillsId(id: number) {
		setSkillsIds(id);
	}

	function handleSpecializationChange(total: number) {
		setSpecializationsLimit(total);
	}

	function handleSkillsChange(total: number) {
		setSkillsLimit(total);
	}

	if (!specializationFilters || !skills) return null;

	return (
		<aside className="hidden lg:block w-97">
			<div className="bg-white rounded-xl shadow p-6 space-y-6">
				<form className={'flex items-center gap-2 py-2 px-6  border border-gray-300 rounded-lg text-gray-400'}>
					<Search className={'w-5 h-5'} />
					<input
						type="text"
						placeholder="Введите запрос ..."
						className={'w-full'}
					/>
				</form>
				<ul className={'flex flex-col gap-3'}>
					<SpecializationFilter
						title="Специализация"
						items={specializationFilters?.data}
						onChange={handleSpecializationChange}
						total={specializationFilters?.total}
						getId={handleGetSpecId}
						hasMore
					/>
					<SkillsFilter
						title="Навыки"
						items={skills.data}
						onChange={handleSkillsChange}
						getId={handleGetSkillsId}
						total={skills.total}
						hasMore
					/>
					{/*<FilterGroup*/}
					{/*	title="Уровень сложности"*/}
					{/*	items={levelsFilters}*/}
					{/*/>*/}
					{/*<FilterGroup*/}
					{/*	title="Рейтинг"*/}
					{/*	items={ratingFilters}*/}
					{/*/>*/}
				</ul>
			</div>
		</aside>
	);
}

{
	/*<FilterGroup*/
}
{
	/*	title="Специализация"*/
}
{
	/*	items={specializationFilters?.data}*/
}
{
	/*	onChange={handleSpecializationChange}*/
}
{
	/*	total={specializationFilters?.total}*/
}
{
	/*	getId={handleGetSpecId}*/
}
{
	/*	hasMore*/
}
{
	/*/>*/
}

{
	/*<FilterGroup*/
}
{
	/*	title="Навыки"*/
}
{
	/*	items={skills.data}*/
}
{
	/*	onChange={handleSkillsChange}*/
}
{
	/*	getId={handleGetSkillsId}*/
}
{
	/*	total={skills.total}*/
}
{
	/*	hasMore*/
}
{
	/*/>*/
}
