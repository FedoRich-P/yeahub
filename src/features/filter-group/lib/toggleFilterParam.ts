import { parseRange } from '@shared/lib/parseRange';

export function toggleFilterParam(
	searchParams: URLSearchParams,
	paramName: string,
	value: string
): URLSearchParams {
	const newParams = new URLSearchParams(searchParams);
	const currentValues = newParams.get(paramName)?.split(',') || [];

	const valuesToToggle = parseRange(value);
	const newValues = currentValues.some((v) => valuesToToggle.includes(v))
		? currentValues.filter((v) => !valuesToToggle.includes(v))
		: [...currentValues, ...valuesToToggle];

	if (newValues.length > 0) {
		newParams.set(paramName, [...new Set(newValues)].join(','));
		newParams.set('page', '1');
	} else {
		newParams.delete(paramName);
	}

	return newParams;
}