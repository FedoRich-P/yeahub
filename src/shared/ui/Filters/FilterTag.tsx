import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
	active: boolean;
	onClick: () => void;
	children: ReactNode;
	icon?: IconProp;
}

export function FilterTag({ active, onClick, children, icon }: Props) {
	return (
		<li
			onClick={onClick}
			className={`${
				active ? 'bg-purple-300 text-white' : 'bg-white'
			} px-3 py-2 border border-gray-200 rounded-lg text-base text-gray-700 cursor-pointer transition-all duration-300 hover:bg-purple-100`}
		>
			{icon && (
		<FontAwesomeIcon
			icon={icon}
			className="mr-5 text-xl"
		/>
	)}
			{children}
		</li>
	);
}