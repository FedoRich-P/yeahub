import { useNavigate } from 'react-router';


export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={'w-full h-full flex items-center justify-center'}>
      <div className="max-w-2xl backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 p-8 rounded-xl shadow-xl">
        <div className="text-9xl font-bold text-blue-600 mb-4">404</div>

        <h1 className={'text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4'}>
          Какая то ошибка ...
        </h1>

        <button onClick={() => navigate(-1)}
                className={'px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg'}>
          Назад
        </button>
      </div>
    </div>
  );
};