import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router';
import { FilterTag } from '@shared/ui/FilterTag';
import { FiltersType } from '@/features/questions-filters/model/types';
import { FiltersLayout } from '@/features/questions-filters/ui/FiltersLayout';
import {
	toggleSpecializationParam
} from '@/features/filter-by-specialization/lib/toggleSpecializationParam';

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
			const newParams = toggleSpecializationParam({searchParams, id, params});
			setSearchParams(newParams);
		},
		[getId, searchParams, setSearchParams, params],
	);

	const handleClick = useCallback(() => {
		setIsOpen((prev) => !prev);
		onChange(isOpen ? 5 : total);
	}, [onChange, total, isOpen]);

	return (
		<FiltersLayout
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
		</FiltersLayout>
	);
}
