import { NavLink } from 'react-router';

export function Header() {
	return (
		<header className="bg-white border-b-1 border-main-border">
			<div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
				<div className="flex items-center space-x-8">
					<h1 className="text-2xl font-bold flex gap-2">
						<img
							src="/icons/logo.svg"
							alt="Logo Yeahub"
							className={'h-8 w-8  bg-purple rounded-full p-1'}
						/>
						Yeahub
					</h1>
					<nav className="hidden lg:flex space-x-6 text-gray-600">
						<NavLink
							to={'/'}
							className="hover:text-purple-600">
							База вопросов
						</NavLink>
						<NavLink
							to={'/'}
							className="hover:text-purple-600">
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
						className="px-7 py-2 bg-purple text-white rounded-lg hover:bg-purple-700">
						Регистрация
					</NavLink>
				</div>
			</div>
		</header>
	);
}
