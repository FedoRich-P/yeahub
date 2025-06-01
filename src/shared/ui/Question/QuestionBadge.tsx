type Props = {
	label: string;
	value: string | number;
};

export const QuestionBadge = ({ label, value }: Props) => {
	return (
		<li className="bg-gray-100 rounded-md px-3 py-1.5 text-sm">
			{label} : {' '}
			<span className="bg-purple-600 text-white p-1.5 rounded">
        {value}
      </span>
		</li>
	);
};
