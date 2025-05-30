import { useNavigate } from 'react-router';


export const NotFound = () => {
  const navigate = useNavigate();

  return (
      <section className="mx-auto flex items-center justify-center flex-col w-full backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 p-8 rounded-xl shadow-xl">
				<button onClick={() => navigate(-1)}
								className={'px-7 py-2 bg-purple text-white rounded-lg hover:bg-purple-700 transition-all duration-500 mb-auto self-end font-medium transform shadow-lg'}>
					Назад
				</button>

        <h1 className={'text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10'}>
          Какая то ошибка ...
        </h1>

        <h2 className="text-9xl font-bold text-blue-600 mb-auto">404</h2>
      </section>
  );
};