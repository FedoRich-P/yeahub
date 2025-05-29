interface Props {
	searchParams: URLSearchParams;
	id: number;
}

export function toggleSkillsParam({ searchParams, id }: Props) {
	const newParams = new URLSearchParams(searchParams);
	const current = newParams.get('skills');
	const ids = current ? current.split(',').map(Number) : [];

	let updated: number[];

	if (ids.includes(id)) {
		updated = ids.filter((i) => i !== id);
	} else {
		updated = [...ids, id];
	}

	if (updated.length > 0) {
		newParams.set('skills', updated.join(','));
		newParams.set('page', '1');
	} else {
		newParams.delete('skills');
	}

	return newParams;
}
