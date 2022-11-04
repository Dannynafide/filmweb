import useDatabase from 'context/useDatabase';
import {useEffect, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';

import MainTemplate from 'template/MainTemplate/MainTemplate';
import styles from './moviePage.module.scss';

export default function Movie() {
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);
  const {movies} = useDatabase();

  const location = useLocation();

  useEffect(() => {
    movies?.forEach((doc) => {
      if (doc.id === movieId) {
        setMovie(doc.data());
      }
    });
  }, [movies, location.pathname]);

  if (!movie) {
    return <div>Ładowanie...</div>;
  }

  return (
    <MainTemplate isAppBarSolidBackground>
      <div className={styles.wrapper}>
        <img
          src={movie.image}
          alt="Girl in a jacket"
          className={styles.image}
        />
        <div>
          <p className={styles.title}>{movie.title}</p>
          <p className={styles.description}>{movie.description}</p>
          <div className={styles.filmInfo}>
            <p>
              <span className={styles.filmInfo_header}>Rok: </span>
              {movie.year}
            </p>
            <p>
              <span className={styles.filmInfo_header}>Czas: </span>
              {movie.filmTime}
            </p>
            <p>
              <span className={styles.filmInfo_header}>Ocena: </span>
              {movie.ratings.value}
            </p>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}
