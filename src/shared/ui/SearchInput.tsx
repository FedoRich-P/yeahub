import { Search } from 'lucide-react';

export const SearchInput = () => (
	<form className="flex items-center gap-2 py-2 px-6 border border-gray-300 rounded-lg text-gray-400">
		<Search className="w-5 h-5" />
		<input
			type="text"
			placeholder="Введите запрос ..."
			className="w-full"
		/>
	</form>
);