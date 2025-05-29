interface Props {
	searchParams: URLSearchParams;
	id: number;
	params: number;
}

export function toggleSpecializationParam({ searchParams, id, params }: Props) {
	const newParams = new URLSearchParams(searchParams);
	const isCurrent = params === id;

	if (isCurrent) {
		newParams.delete('specialization');
	} else {
		newParams.set('specialization', id.toString());
		newParams.set('page', '1');
	}

	return newParams;
}
