import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchCampers } from '../../redux/campers/campersThunk';
import { selectError, selectFilteredCampers, selectIsLoading } from '../../redux/campers/selectors';
import { initialState, setFilters, setPage } from '../../redux/filters/slice';
import { selectPage } from '../../redux/filters/selectors';
import { Button } from '../../components/Button/Button';
import { CampersList, PER_PAGE } from '../../components/CampersList/CampersList';
import { FilterBar } from '../../components/FilterBar/FilterBar';
import css from './CampersPage.module.css';

const CampersPage = () => {
  const campers = useSelector(selectFilteredCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const [filteredCampers, setFilteredCampers] = useState([]);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    setFilteredCampers(campers.slice(0, page * PER_PAGE));
  }, [page, campers]);

  return (
    <div className={css.container}>
      {isLoading && (
        <p style={{ textAlign: 'center', width: '100%', fontSize: '20px', fontWeight: 'bold' }}>
          Please wait, loading...
        </p>
      )}
      {error && (
        <p style={{ color: 'red', textAlign: 'center', width: '100%', fontSize: '20px', fontWeight: 'bold' }}>
          Error loading
        </p>
      )}
      {!isLoading && !error && (
        <>
          <FilterBar />
          {campers.length === 0 ? (
            <p style={{ textAlign: 'center', width: '100%', fontSize: '20px', fontWeight: 'bold' }}>
              No campers match your criteria
              <br />
              <br />
              <Button title="Show all campers" variant="secondary" onClick={() => dispatch(setFilters(initialState))} />
            </p>
          ) : (
            <div className={css.listWrapper}>
              <CampersList campers={filteredCampers} />
              {campers.length > page * 4 && (
                <Button title="Load more" variant="secondary" onClick={() => dispatch(setPage(page + 1))} />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CampersPage;
