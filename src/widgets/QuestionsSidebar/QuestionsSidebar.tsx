import { useState } from 'react';
import { SpecializationFilter } from '@/features/filter-by-specialization/ui/SpecializationFilter';
import { SkillsFilter } from '@/features/filter-by-skills/ui/SkillsFilter';
import { FilterGroup } from '@/features/filter-group/ui/FilterGroup';
import { levelsFilters, ratingFilters } from '@/features/questions-filters/model/constants';
import { useGetSkillsQuery } from '@/entities/skills/api/skillsApi';
import { useNavigate } from 'react-router';
import { SearchInput } from '@shared/ui/SearchInput';
import { PATH } from '@/app/routes/routes';
import { useGetSpecializationsQuery } from '@/entities/specialization/api/specializationApi';

export function QuestionsSidebar() {
	const [specializationsLimit, setSpecializationsLimit] = useState<number>(5);
	const [skillsLimit, setSkillsLimit] = useState<number>(5);
	const [specializationsIds, setSpecializationsIds] = useState<number | null>(null);
	const navigate = useNavigate();

	const { data: specializationFilters } = useGetSpecializationsQuery({ page: 1, limit: specializationsLimit });
	const { data: skills } = useGetSkillsQuery({ page: 1, limit: skillsLimit, specializations: specializationsIds });

	function handleGetSpecId(id: number) {
		setSpecializationsIds(id);
	}

	function handleSpecializationChange(total: number) {
		setSpecializationsLimit(total);
	}

	function handleSkillsChange(total: number) {
		setSkillsLimit(total);
	}

	function handleClearFilters() {
		navigate( PATH.QUESTIONS+'/?page=1', { replace: true });
	}

	if (!specializationFilters || !skills) return null;

	return (
		<aside className="hidden lg:block w-97 shadow-xl rounded-lg bg-white p-6 space-y-6">
			<SearchInput />
			<ul className={'flex flex-col gap-3'}>
				<SpecializationFilter
					title="Специализация"
					items={specializationFilters?.data}
					onChange={handleSpecializationChange}
					total={specializationFilters?.total}
					getId={handleGetSpecId}
				/>
				<SkillsFilter
					title="Навыки"
					items={skills.data}
					onChange={handleSkillsChange}
					total={skills.total}
				/>
				<FilterGroup
					title="Уровень сложности"
					items={levelsFilters}
					paramName={'complexity'}
				/>
				<FilterGroup
					title="Рейтинг"
					items={ratingFilters}
					paramName={'rate'}
				/>
			</ul>

			<button
				onClick={handleClearFilters}
				className={
					'bg-purple-600 text-white py-2 px-5 rounded-md cursor-pointer transition-all duration-500 hover:bg-purple-300 shadow-md'
				}>
				Очистить все поля
			</button>
		</aside>
	);
}
