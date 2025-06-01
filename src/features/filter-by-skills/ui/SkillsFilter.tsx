import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { FilterTag } from '@shared/ui/Filters/FilterTag';
import { FiltersWrapper } from '@shared/ui/Filters/FiltersWrapper';
import { FiltersType } from '@/entities/skills';
import { toggleSkillsParam } from '@/features/filter-by-skills';

type Props = {
	title: string;
	items: FiltersType[] | undefined;
	onChange: (total: number) => void;
	total: number;
};

export function SkillsFilter({ title, items, onChange, total }: Props) {
	const [skills, setSkills] = useState<string[] | string>(['']);
	const [searchParams, setSearchParams] = useSearchParams();
	const [isOpen, setIsOpen] = useState(false);

	const skillsFromUrl = searchParams.get('skills');

	useEffect(() => {
		if (skillsFromUrl) {
			setSkills(skillsFromUrl.split(','));
		} else {
			setSkills('');
		}
	}, [skillsFromUrl]);

	const handleToggleValue = useCallback((id: number) => {
			setSearchParams(toggleSkillsParam({ searchParams, id }));
		},
		[searchParams, setSearchParams],
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
			{items?.map((item) => {
				const isActive = skills.includes(item.id.toString());
				return (
					<FilterTag
						key={item.id}
						onClick={() => handleToggleValue(item.id)}
						active={isActive}>
						<span>{item.title}</span>
					</FilterTag>
				);
			})}
		</FiltersWrapper>
	);
}
