import { FilterOption } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
	title: string;
	items: FilterOption[];
	hasMore?: boolean;
};

export function FilterGroup({ title, items, hasMore}: Props) {
	return (
		<li>
			<h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
			<ul className="flex flex-wrap gap-2 mb-2">
				{items.map((item, index) => (
					<li
						key={index}
						className="px-3 py-2 flex items-center bg-white border border-gray-200 rounded-lg text-base text-gray-700 cursor-pointer transition-all duration-500 hover:bg-purple-50">
						{item.icon && <FontAwesomeIcon icon={item.icon} className="mr-5 text-xl" />}
						<button>{item.label}</button>
					</li>
				))}
			</ul>
			{hasMore && <button className={'text-purple border-b text-sm'}>Посмотреть все</button>}
		</li>
	);
}
