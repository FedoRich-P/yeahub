import { NavLink } from 'react-router';

export function Footer() {
	return (
		<footer className="bg-purple-dark text-gray-300 mt-auto py-8 rounded-t-lg">
			<div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
				<div>
					<h4 className="text-lg font-bold text-white flex gap-2 items-center">
						<img
							src="/icons/logo.svg"
							alt="Logo Yeahub"
							className={'h-8 w-8  bg-purple rounded-full p-1'}
						/>
						Yeahub</h4>
					<p className="text-sm mt-2">Выбери, каким будет IT завтра, вместе с нами</p>
				</div>
				<ul className="flex space-x-4">
					<li>
						<NavLink to={'/'}><img src="/icons/youtube_white.svg" alt="Youtube" /></NavLink>
					</li>
					<li>
						<NavLink to={'/'}><img src="/icons/github_white.svg" alt="GitHub" /></NavLink>
					</li>
					<li>
						<NavLink to={'/'}><img src="/icons/telegram_white.svg" alt="Telegram" /></NavLink>
					</li>
					<li>
						<NavLink to={'/'}><img src="/icons/instagram_white.svg" alt="Instagram" /></NavLink>
					</li>
				</ul>
			</div>
		</footer>
	);
}
