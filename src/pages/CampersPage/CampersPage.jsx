import { FilterBar } from '../../components/FilterBar/FilterBar';
import css from './CampersPage.module.css';
import { CampersList } from '../../components/CampersList/CampersList';

const CampersPage = () => {
  return (
    <div className={css.container}>
      <FilterBar />
      <CampersList />
    </div>
  );
};

export default CampersPage;
