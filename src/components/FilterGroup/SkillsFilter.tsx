import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpecializationType } from '@components/FilterGroup/FilterGroup';

type Props = {
	title: string;
	items: SpecializationType[] | undefined;
	hasMore?: boolean;
	onChange: (total: number) => void;
	getId: (id: number) => void;
	total: number;
};

export function SkillsFilter({ title, items, hasMore, onChange, total, getId }: Props) {
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

	function handleGetId(id: number) {
		getId(id);

		const params = new URLSearchParams(searchParams.toString());

		const current = params.get('skills');
		const ids = current ? current.split(',').map(Number) : [];

		let updated: number[];
		if (ids.includes(id)) {
			updated = ids.filter((i) => i !== id);
		} else {
			updated = [...ids, id];
		}

		if (updated.length > 0) {
			params.set('skills', updated.join(','));
		} else {
			params.delete('skills');
		}

		setSearchParams(params);
	}

	function handleClick() {
		setIsOpen((prev) => !prev);
		onChange(isOpen ? 5 : total);
	}

	return (
		<li>
			<h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
			<ul className="flex flex-wrap gap-2 mb-2">
				{items?.map((item) => (
					<li
						key={item.id}
						onClick={() => handleGetId(item.id)}
						className={`${skills.includes(item.id.toString()) ? 'bg-purple-300 text-white' : 'bg-white'} px-3 py-2 flex items-center border border-gray-200 rounded-lg text-base text-gray-700 cursor-pointer transition-all duration-500 hover:bg-purple-50`}>
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
