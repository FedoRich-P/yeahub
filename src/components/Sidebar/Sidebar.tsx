import { FilterGroup } from '@components/FilterGroup/FilterGroup';
import { Search } from 'lucide-react';
import { useGetSkillsQuery, useGetSpecializationsQuery } from '@/services/specializations';
import { useState } from 'react';

export function Sidebar() {
	const [specializationsLimit, setSpecializationsLimit] = useState<number>(5);
	const [skillsIds, setSkillsIds] = useState(0);

	const { data: specializationFilters } = useGetSpecializationsQuery({ page: 1, limit: specializationsLimit });
	const { data: skills } = useGetSkillsQuery({ page: 1, limit: 10, specializations: skillsIds });

	function handleGetId(id: number) {
		setSkillsIds(id);
	}

	function handleSpecializationChange(total: number) {
		setSpecializationsLimit(total);
	}

	console.log(skills);

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
					<FilterGroup
						title="Специализация"
						items={specializationFilters?.data}
						onChange={handleSpecializationChange}
						total={specializationFilters?.total}
						getId={handleGetId}
						hasMore
					/>
					{/*<FilterGroup*/}
					{/*	title="Навыки"*/}
					{/*	items={skills.data}*/}
					{/*	hasMore*/}
					{/*/>*/}
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
