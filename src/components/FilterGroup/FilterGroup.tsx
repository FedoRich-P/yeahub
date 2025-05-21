import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';

export type SpecializationType = {
	id: number;
	title: string | null;
	icon?: IconProp;
};

export type SpecializationsApiType = {
	data: SpecializationType[];
	limit: number;
	page: number;
	total: number;
};

type Props = {
	title: string;
	items: SpecializationType[] | undefined;
	hasMore?: boolean;
	onChange: (total: number) => void
	getId: (id: number) => void
	total: number;
};

export function FilterGroup({ title, items, hasMore, onChange, total, getId }: Props) {

	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(prev => !prev)
		onChange(isOpen ? 5 : total)
	}

	console.log(items);

	return (
		<li>
			<h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
			<ul className="flex flex-wrap gap-2 mb-2">
				{items?.map((item) => (
					<li
						key={item.id}
						onClick={() => getId(item.id)}
						className="px-3 py-2 flex items-center bg-white border border-gray-200 rounded-lg text-base text-gray-700 cursor-pointer transition-all duration-500 hover:bg-purple-50">
						{item.icon && (
							<FontAwesomeIcon
								icon={item.icon}
								className="mr-5 text-xl"
							/>
						)}
						<button>{item.title}</button>
					</li>
				))}
			</ul>
			{hasMore && <button className={'text-purple border-b text-sm cursor-pointer'} onClick={handleClick}>{isOpen ? 'Закрыть' : 'Посмотреть все'}</button>}
		</li>
	);
}
