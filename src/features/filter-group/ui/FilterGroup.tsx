import { useCallback } from 'react';
import { useSearchParams } from 'react-router';
import { FilterGroupType } from '@shared/types';
import { FiltersWrapper, FilterTag, parseRange } from '@/shared';
import { toggleFilterParam } from '@/features/filter-group';

type Props = {
	title: string;
	items: FilterGroupType[];
	paramName: 'complexity' | 'rate';
};

export function FilterGroup({ title, items, paramName }: Props) {
	const [searchParams, setSearchParams] = useSearchParams();
	const complexity = searchParams.get(paramName)?.split(',') || [];

	const handleToggleValue = useCallback(
		(value: string) => {
			const newParams = toggleFilterParam({ searchParams, paramName, value });
			setSearchParams(newParams, { replace: true });
		},
		[searchParams, setSearchParams, paramName],
	);

	return (
		<FiltersWrapper title={title}>
			{items?.map((item) => {
				const isActive = complexity.some((c) => parseRange(item.value).includes(c))
				return (
					<FilterTag
						key={item.id}
						onClick={() => handleToggleValue(item.value)}
						active={isActive}>
						<span>{item.label}</span>
					</FilterTag>
				);
			})}
		</FiltersWrapper>
	);
}
