import { FilterBar } from '../../components/FilterBar/FilterBar';
import css from './CampersPage.module.css';

const CampersPage = () => {

  return (
    <div className={css.container}>
      <FilterBar />
      <div className={css.campersList}>CampersList</div>
    </div>
  );
};

export default CampersPage;
