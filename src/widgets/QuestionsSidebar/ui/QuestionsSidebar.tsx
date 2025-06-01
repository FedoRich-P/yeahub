import { useState } from 'react';
import { complexityFilters, ratingFilters } from '@shared/constants';
import { SkillsFilter } from '@/features/filter-by-skills';
import { SpecializationFilter } from '@/features/filter-by-specialization';
import { FilterGroup } from '@/features/filter-group';
import { useGetSkillsQuery } from '@/entities/skills';
import { SearchQuestion } from '@/features/search-questions';
import { useGetSpecializationsQuery } from '@/entities/specialization';
import { ClearButton } from '@/widgets/QuestionsSidebar';

export function QuestionsSidebar() {
	const [specializationsLimit, setSpecializationsLimit] = useState<number>(5);
	const [skillsLimit, setSkillsLimit] = useState<number>(5);
	const [specializationsIds, setSpecializationsIds] = useState<number | null>(null);

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

	if (!specializationFilters || !skills) return null;

	return (
		<aside className="hidden lg:block w-97 shadow-xl rounded-lg bg-white p-6 space-y-6">
			<SearchQuestion />
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
					items={complexityFilters}
					paramName={'complexity'}
				/>
				<FilterGroup
					title="Рейтинг"
					items={ratingFilters}
					paramName={'rate'}
				/>
			</ul>
			<ClearButton/>
		</aside>
	);
}
