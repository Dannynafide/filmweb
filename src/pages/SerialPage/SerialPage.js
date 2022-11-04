import useDatabase from 'context/useDatabase';
import {useEffect, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';

import MainTemplate from 'template/MainTemplate/MainTemplate';
import styles from './serialPage.module.scss';

export default function Movie() {
  const {serialId} = useParams();
  const [serial, setSerial] = useState(null);
  const {tvSeries} = useDatabase();

  const location = useLocation();

  useEffect(() => {
    tvSeries?.forEach((doc) => {
      if (doc.id === serialId) {
        setSerial(doc.data());
      }
    });
  }, [tvSeries, location.pathname]);

  if (!serial) {
    return <div>Ładowanie...</div>;
  }

  return (
    <MainTemplate isAppBarSolidBackground>
      <div className={styles.wrapper}>
        <img
          src={serial.image}
          alt="Girl in a jacket"
          className={styles.image}
        />
        <div>
          <p className={styles.title}>{serial.title}</p>
          <p className={styles.description}>{serial.description}</p>
          <div className={styles.filmInfo}>
            <p>
              <span className={styles.filmInfo_header}>Rok: </span>
              {serial.year}
            </p>
            <p>
              <span className={styles.filmInfo_header}>Czas: </span>
              {serial.filmTime}
            </p>
            <p>
              <span className={styles.filmInfo_header}>Ocena: </span>
              {serial.ratings.value}
            </p>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}
