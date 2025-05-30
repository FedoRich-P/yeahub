interface Props {
	searchParams: URLSearchParams;
	id: number;
}

export function toggleSkillsParam({ searchParams, id }: Props) {
	const newParams = new URLSearchParams(searchParams);
	const currentParams = newParams.get('skills');
	const skills = currentParams ? currentParams.split(',').map(Number) : [];

	let listSkillsId: number[];

	if (skills.includes(id)) {
		listSkillsId = skills.filter((i) => i !== id);
	} else {
		listSkillsId = [...skills, id];
	}

	if (listSkillsId.length > 0) {
		newParams.set('skills', listSkillsId.join(','));
		newParams.set('page', '1');
	} else {
		newParams.delete('skills');
	}

	return newParams;
}
