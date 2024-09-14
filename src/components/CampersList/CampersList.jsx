import { useDispatch, useSelector } from 'react-redux';
import { selectCampersLoaded, selectFilteredCampers } from '../../redux/campers/selectors';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/campersThunk';
import { CamperCard } from '../CamperCard/CamperCard';
import css from './CampersList.module.css';

export const CampersList = () => {
  const campersLoaded = useSelector(selectCampersLoaded);
  const campers = useSelector(selectFilteredCampers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!campersLoaded) {
      dispatch(fetchCampers());
    }
  }, [dispatch, campersLoaded]);

  return (
    <ul className={css.campersList}>
      {!!campers && campers.map(camper => <CamperCard key={camper.id} camper={camper} />)}
    </ul>
  );
};
