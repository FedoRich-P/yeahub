import { BrushCleaning, Search } from 'lucide-react';
import { ChangeEvent } from 'react';

interface Props {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onClear: () => void;
	placeholder?: string;
}

export function SearchInput({ value, onChange, onClear, placeholder = 'Введите запрос ...' }: Props) {
	return (
		<div className="flex items-center gap-2 py-2 px-6 border border-gray-300 rounded-lg text-gray-400">
			<Search className="w-5 h-5" aria-hidden="true" />
			<input
				type="text"
				placeholder={placeholder}
				className="w-full outline-none"
				value={value}
				onChange={onChange}
			/>
			{value && (
				<BrushCleaning
					onClick={onClear}
					className="w-6 h-6 cursor-pointer"
					aria-hidden="true"
				/>
			)}
		</div>
	);
}
