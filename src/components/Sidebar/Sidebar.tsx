
import { FilterGroup } from '@components/FilterGroup/FilterGroup';
import { levelsFilters, ratingFilters, skillsFilters, specializationFilters } from '@/constants';
import { Search } from 'lucide-react';


export function Sidebar() {
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
						items={specializationFilters}
						hasMore
					/>
					<FilterGroup
						title="Навыки"
						items={skillsFilters}
						hasMore
					/>
					<FilterGroup
						title="Уровень сложности"
						items={levelsFilters}
					/>
					<FilterGroup
						title="Рейтинг"
						items={ratingFilters}
					/>
				</ul>
			</div>
		</aside>
	);
}
