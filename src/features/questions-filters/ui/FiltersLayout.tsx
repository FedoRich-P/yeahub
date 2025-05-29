import { ReactNode, useCallback, useState } from 'react';
import { DEFAULT_LIMIT } from '@/features/questions-filters/model/constants';

type Props = {
	title: string;
	onChange?: (total: number) => void;
	total?: number;
	children: ReactNode;
};

export function FiltersLayout({ title, onChange, total, children }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	const hasMore = total && total > DEFAULT_LIMIT;

	const handleClick = useCallback(() => {
		setIsOpen((prev) => !prev);
		if(onChange && total) onChange(isOpen ? DEFAULT_LIMIT : total);
	}, [onChange, total, isOpen]);

	return (
		<li>
			<h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
			<ul className="flex flex-wrap gap-2 mb-2">{children}</ul>
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
