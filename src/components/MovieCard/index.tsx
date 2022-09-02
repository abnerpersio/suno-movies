import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../constants/routes';
import { useMovies } from '../../hooks/useMovies';
import { formatImageUrl } from '../../utils/image';
import { StarIcon } from '../icons/star';
import { About, Category, Container, Description, Image, Rating, Title } from './styles';

type Props = {
  viewType?: string;
  id: number;
  image: string;
  title: string;
  categories: number[];
  description: string;
  rating: number;
};

export function MovieCard({ viewType, id, image, title, categories, description, rating }: Props) {
  const { genres } = useMovies();

  const categoriesName = useMemo(
    () =>
      categories
        .map((category) => genres?.find(({ id: categoryId }) => categoryId === category)?.name)
        .filter(Boolean),
    [categories, genres],
  );

  return (
    <Container className={viewType === 'list' ? 'list-display' : ''}>
      <Link to={routes.MOVIE.replace(':id', String(id))}>
        <Image className={viewType === 'list' ? 'list-display' : ''} src={formatImageUrl(image)} />
      </Link>

      <About>
        <Title to={routes.MOVIE.replace(':id', String(id))}>{title}</Title>

        <Category>
          <span>{categoriesName.slice(0, 2).join(', ')}</span>
        </Category>

        <Rating>
          <StarIcon />
          <p>{rating}</p>
        </Rating>

        <Description>{`${description.substring(0, 150)}...`}</Description>
      </About>
    </Container>
  );
}
