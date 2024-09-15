import { useOutletContext } from 'react-router';
import { Features } from '../../components/Features/Features';
import css from './FeaturesPage.module.css';
import VehicleDetails from '../../components/VehicleDetails/VehicleDetails';

const FeaturesPage = () => {
  const camper = useOutletContext();

  return (
    <div className={css.container}>
      <Features camper={camper} />
      <VehicleDetails camper={camper} />
    </div>
  );
};

export default FeaturesPage;
