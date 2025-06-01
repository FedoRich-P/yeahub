interface Props {
	total: number,
	limit: number
}

export const calculateTotalPages = ({total, limit} : Props): number =>
	Math.ceil(total / limit);