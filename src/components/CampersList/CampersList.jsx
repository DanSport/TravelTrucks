import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampersLoaded,
  selectError,
  selectFilteredCampers,
  selectIsLoading,
} from '../../redux/campers/selectors';
import { useEffect, useState } from 'react';
import { fetchCampers } from '../../redux/campers/campersThunk';
import { CamperCard } from '../CamperCard/CamperCard';
import css from './CampersList.module.css';
import { toast } from 'react-toastify';
import { Button } from '../Button/Button';

const PER_PAGE = 4;

export const CampersList = () => {
  const campersLoaded = useSelector(selectCampersLoaded);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectFilteredCampers);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [filteredCampers, setFilteredCampers] = useState([]);

  useEffect(() => {
    if (!campersLoaded) {
      dispatch(fetchCampers());
    }
  }, [dispatch, campersLoaded]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    setFilteredCampers(campers.slice(0, page * PER_PAGE));
  }, [page, campers]);

  console.log({ page, campers, filteredCampers });
  return (
    <>
      {isLoading && (
        <p style={{ textAlign: 'center', width: '100%', fontSize: '20px', fontWeight: 'bold' }}>Loading...</p>
      )}
      {error && (
        <p style={{ color: 'red', textAlign: 'center', width: '100%', fontSize: '20px', fontWeight: 'bold' }}>Error</p>
      )}
      {!isLoading && !error && (
        <>
          <ul className={css.campersList}>
            {filteredCampers.map(camper => (
              <li key={camper.id}>
                <CamperCard camper={camper} />
              </li>
            ))}
            {campers.length > page * 4 && (
              <li>
                <Button title="Load more" onClick={() => setPage(prev => prev + 1)} />
              </li>
            )}
          </ul>
        </>
      )}
    </>
  );
};
