import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router';

export type SpecializationType = {
	id: number;
	title: string | null;
	icon?: IconProp;
};

type Props = {
	title: string;
	items: SpecializationType[] | undefined;
	hasMore?: boolean;
	onChange: (total: number) => void;
	getId: (id: number) => void;
	total: number;
};

export function SpecializationFilter({ title, items, hasMore, onChange, total, getId }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	const [searchParams, setSearchParams] = useSearchParams();

	const specializationId = Number(searchParams.get('specialization'));

	const handleGetId = useCallback(
		(id: number) => {
			getId(id);

			const isCurrent = specializationId === id;

			if (isCurrent) {
				searchParams.delete('specialization');
			} else {
				searchParams.set('specialization', id.toString());
			}

			setSearchParams(searchParams);
		},
		[getId, searchParams, setSearchParams, specializationId],
	);

	const handleClick = useCallback(() => {
		setIsOpen((prev) => !prev);
		onChange(isOpen ? 5 : total);
	}, [onChange, total, isOpen]);

	return (
		<li>
			<h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
			<ul className="flex flex-wrap gap-2 mb-2">
				{items?.map((item) => (
					<li
						key={item.id}
						onClick={() => handleGetId(item.id)}
						className={`${specializationId === item.id ? 'bg-purple-300 text-white' : 'bg-white'} px-3 py-2 flex items-center border border-gray-200 rounded-lg text-base text-gray-700 cursor-pointer transition-all duration-500 hover:bg-purple-50`}>
						{item.icon && (
							<FontAwesomeIcon
								icon={item.icon}
								className="mr-5 text-xl"
							/>
						)}
						<span>{item.title}</span>
					</li>
				))}
			</ul>
			{hasMore && (
				<button
					className={'text-purple border-b text-sm cursor-pointer'}
					onClick={handleClick}>
					{isOpen ? 'Закрыть' : 'Посмотреть все'}
				</button>
			)}
		</li>
	);
}
