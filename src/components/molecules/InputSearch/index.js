import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import {db} from 'api/_firebase';
import IconBtn from 'components/atoms/ButtonIcon/ButtonIcon';
import Scroll from './Scroll';
import SearchList from './SearchList';
import styles from './inputSearch.module.scss';

// openSearchBar - mona zamienić na fullOpne albo big
function InputSearch({onlyIcon, openSearchBar, setOpenSearchBar}) {
  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, 'movies'));
      setMovies(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          category: 'movies',
        }))
      );

      const data2 = await getDocs(collection(db, 'tvSeries'));
      setTvSeries(
        data2.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          category: 'tvSeries',
        }))
      );
    };

    fetchData();
  }, []);

  useEffect(() => {
    const items = movies.concat(tvSeries, tvSeries, tvSeries);
    setFilteredItems(
      items.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.originalTitle.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, movies, tvSeries]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredItems={filteredItems} />
        </Scroll>
      );
    }
    return null;
  }

  if (onlyIcon) {
    return (
      <IconBtn onClick={() => setOpenSearchBar()}>
        <SearchIcon />
      </IconBtn>
    );
  }

  return (
    <div className={styles.searchInput}>
      <div className={styles.searchInput__wrappericon}>
        <SearchIcon className={styles.searchInput__icon} />
      </div>

      <InputBase
        className={styles.searchInput__inputBase}
        placeholder="Szukaj filmów, seriali, gier, postaci i światów"
        inputProps={{'aria-label': 'search'}}
        style={{fontSize: 'inherit'}}
        onChange={handleChange}
      />

      {openSearchBar && (
        <div className={styles.searchInput__wrappericon}>
          <IconBtn
            onClick={() => setOpenSearchBar()}
            className={styles.closeSearchBarBtn}
          >
            <CloseIcon />
          </IconBtn>
        </div>
      )}

      {searchList()}
    </div>
  );
}

export default InputSearch;
