import { useNavigate } from 'react-router';
import { PATH } from '@/app/routes/routes';

export function ClearButton() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(PATH.QUESTIONS + '/?page=1', { replace: true });
	};

	return (
		<button
			onClick={handleClick}
			className="bg-purple-600 text-white py-2 px-5 rounded-md hover:bg-purple-400"
		>
			Очистить все поля
		</button>
	);
}