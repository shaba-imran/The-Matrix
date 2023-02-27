import { CastCard, FilmCard } from '../Card/Card';

const CastCardList = ({ castInfo }) => {
	return (
		<div>
			{
				castInfo.map((user, i) => {
					return (
						<CastCard 
							key={i}
							id={castInfo[i].id}
							name={castInfo[i].name}
							played={castInfo[i].played}
						/>
					);
				})
			}
		</div>
	);
}

const FilmCardList = ({ filmInfo }) => {
	return (
		<div>
			{
				filmInfo.map((movie, i) => {
					return (
						<FilmCard 
							key={i}
							id={filmInfo[i].id}
							title={filmInfo[i].title}
							year={filmInfo[i].year}
							rating={filmInfo[i].rating} 
						/>
					);
				})
			}
		</div>
	);
}

export { CastCardList, FilmCardList };