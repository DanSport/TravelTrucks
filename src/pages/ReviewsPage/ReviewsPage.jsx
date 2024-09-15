import { useOutletContext } from 'react-router';
import { ReviewsList } from '../../components/ReviewsList/ReviewsList';

const ReviewsPage = () => {
  const { reviews } = useOutletContext();

  return <ReviewsList reviews={reviews} />;
};

export default ReviewsPage;
