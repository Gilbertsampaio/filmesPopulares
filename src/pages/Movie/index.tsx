import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

import {
  AiFillStar,
  AiOutlineDoubleLeft,
  AiFillPlayCircle,
} from 'react-icons/ai';

import { getYear } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { Movie as MovieSelected } from '../../store/modules/Movies/types';

import { Container, Poster, DetailMovie } from './styles';

import * as MoviesActions from '../../store/modules/Movies/actions';
import Header from '../../components/Header';

interface ISearch {
  search: string;
}

const Movie: React.FC = () => {
  const dispatch = useDispatch();
  const { idMovie } = useParams();
  const history = useHistory();
  const [movieSelected, setMovieSelected] = useState<MovieSelected>();
  const [releaseDate, setDeleaseDate] = useState(0);

  const stateMovies = useSelector((state: any) => state.Movies);

  useEffect(() => {
    const selected = stateMovies.results.find((currentMovie: MovieSelected) => {
      if (currentMovie.id === Number(idMovie)) {
        return currentMovie;
      }
    });

    if (!selected) {
      history.push('/');
    }

    setMovieSelected(selected);
    setDeleaseDate(getYear(new Date(selected?.release_date)));
  }, [stateMovies.results, idMovie, history]);

  const handleSearch = debounce(async (data: ISearch) => {
    dispatch(MoviesActions.SearchMoviesRequest(data.search));
  }, 500);

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Link to={'/'}>
        <AiOutlineDoubleLeft
          color="#ffcc00"
          size={30}
          style={{ marginLeft: 50, marginTop: 30 }}
        />
      </Link>
      <Container>
        <Poster>
          <img
            src={`${process.env.REACT_APP_BASE_URL_IMAGEM}${movieSelected?.poster_path}`}
            alt=""
          />
        </Poster>
        <DetailMovie>
          <strong style={{color:'#ffcc00', textTransform: 'uppercase',}}>{movieSelected?.title}</strong>
          <h3>{releaseDate}</h3>
          <div>
            <AiFillStar color="#ffcc00" size={25} />
            <span>{movieSelected?.vote_average}</span>
          </div>
          <p style={{fontStyle: 'italic',}}>{movieSelected?.overview}</p>

        </DetailMovie>
      </Container>
    </>
  );
};

export default Movie;
