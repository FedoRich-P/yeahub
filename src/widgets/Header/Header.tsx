import { Link, NavLink } from 'react-router';
import { PATH } from '@/app/routes/routes';

export function Header() {
	return (
		<header className="bg-white border-b-1 border-main-border">
			<div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
				<div className="flex items-center space-x-8">
					<Link to={PATH.MAIN} className="text-2xl font-bold flex gap-2">
						<img
							src="/icons/logo.svg"
							alt="Logo Yeahub"
							className={'h-8 w-8  bg-purple rounded-full p-1'}
						/>
						Yeahub
					</Link>
					<nav className="hidden lg:flex space-x-6 text-gray-600">
						<NavLink
							to={PATH.QUESTIONS}
							className={({ isActive }) =>
								`${isActive ? 'text-purple bg-gray-100 shadow-md' : 'text-gray-600'} rounded-lg py-1.5 p-2 hover:text-purple-600`
							}>
							База вопросов
						</NavLink>
						<NavLink
							to={PATH.TRAINING}
							className={({ isActive }) =>
								`${isActive ? 'text-purple bg-gray-100 shadow-md' : 'text-gray-600'} rounded-lg py-1.5 p-2 hover:text-purple-600`
							}>
							Тренажер
						</NavLink>
					</nav>
				</div>
				<div className="flex items-center gap-6">
					<NavLink
						to={'/'}
						className="text-gray-600 hover:text-purple-600">
						Вход
					</NavLink>
					<NavLink
						to={'/'}
						className="px-7 py-2 bg-purple text-white rounded-lg hover:bg-purple-700 transition-all duration-500">
						Регистрация
					</NavLink>
				</div>
			</div>
		</header>
	);
}
