import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router';
import { FiltersType } from '@/entities/skills';
import { toggleSpecializationParam } from '@/features/filter-by-specialization';
import { FiltersWrapper, FilterTag } from '@/shared';

type Props = {
	title: string;
	items: FiltersType[] | undefined;
	onChange: (total: number) => void;
	getId: (id: number) => void;
	total: number;
};

export function SpecializationFilter({ title, items, onChange, total, getId }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const params = Number(searchParams.get('specialization'));

	const handleToggleValue = useCallback(
		(id: number) => {
			getId(id);
			setSearchParams(toggleSpecializationParam({searchParams, id, params}));
		},
		[getId, searchParams, setSearchParams, params],
	);

	const handleClick = useCallback(() => {
		setIsOpen((prev) => !prev);
		onChange(isOpen ? 5 : total);
	}, [onChange, total, isOpen]);

	return (
		<FiltersWrapper
			title={title}
			total={total}
			onChange={handleClick}>
			{items?.map((item) => (
				<FilterTag
					key={item.id}
					onClick={() => handleToggleValue(item.id)}
					active={params === item.id}>
					<span>{item.title}</span>
				</FilterTag>
			))}
		</FiltersWrapper>
	);
}
