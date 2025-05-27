import { Pagination } from '@components/Pagination/Pagination';
import { QuestionCard } from '@components/QuestionCard/QuestionCard';
import { useGetQuestionsQuery } from '@/services/questions';
import { useSearchParams } from 'react-router';

export function QuestionsPage() {
	const [searchParams, setSearchParams] = useSearchParams();

	const skillsParam = searchParams.get('skills');
	const specialization = searchParams.get('specialization');
	const page = searchParams.get('page');

	const skills = skillsParam ? skillsParam.split(',').map(String) : [];
	const { data} = useGetQuestionsQuery({ page: page ? page : '1', limit: 10, specialization, skills });

	function handlePageChange(page: number) {
		const params = new URLSearchParams(searchParams.toString());
		params.set('page', page.toString());
		setSearchParams(params);
	}

	if(!data) return <>Error...</>;

	return (
		<section className="lg:pr-8 bg-white rounded-lg p-4">
			<h2 className="text-xl font-light border-b-2 border-main-border pb-3">Вопросы React, JavaScript</h2>
			{data?.data.length > 0 &&
				<>
					{data.data.map((question) => (
						<QuestionCard
							key={question.id}
							question={question}
						/>
					))}
					<Pagination
						totalPages={data ? Math.ceil(data.total / data.limit) : 0}
						getPage={handlePageChange}
					/>
				</>
			}

		</section>
	);
}
