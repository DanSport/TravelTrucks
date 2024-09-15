import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import { RatingLocation } from '../../components/RatingLocation/RatingLocation';
import { BookingForm } from '../../components/BookingForm/BookingForm';
import { fetchCamperDetails } from '../../redux/campers/detailsOperations';
import css from './DetailsPage.module.css';

const DetailsPage = () => {
  const { id } = useParams();
  const [camperDetails, setCamperDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isOnReviews = window.location.pathname.includes('reviews');

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchCamperDetails(id)
      .then(res => {
        setCamperDetails(res);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        toast.error('Unable to load details');
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      {isLoading && (
        <p style={{ textAlign: 'center', width: '100%', fontSize: '20px', fontWeight: 'bold' }}>
          Please wait while we are loading...
        </p>
      )}
      {error && (
        <p style={{ color: 'red', textAlign: 'center', width: '100%', fontSize: '20px', fontWeight: 'bold' }}>
          Can&apos;t load camper details
        </p>
      )}
      {!isLoading && !error && camperDetails.id && (
        <div className={css.container}>
          <div className={css.header}>
            <h2 className={css.title}>{camperDetails.name}</h2>
            <RatingLocation
              location={camperDetails.location}
              rating={camperDetails.rating}
              reviewsCount={camperDetails.reviews.length}
            />
            <p className={css.price}>€{camperDetails.price.toFixed(2)}</p>
          </div>
          <ul className={css.gallery}>
            {camperDetails.gallery.map(img => (
              <li key={img.thumb} className={css.galleryItem}>
                <img src={img.thumb} alt="" className={css.galleryImg} />
              </li>
            ))}
          </ul>
          <p className={css.description}>{camperDetails.description}</p>
          <div className={css.links}>
            <NavLink className={clsx(css.link, !isOnReviews && css.active)} to=".">
              Features
            </NavLink>
            <NavLink className={clsx(css.link, isOnReviews && css.active)} to="./reviews">
              Reviews
            </NavLink>
          </div>
          <div className={css.content}>
            <div className={css.contentWindow}>
              <Outlet context={camperDetails} />
            </div>
            <div className={css.contentWindow}>
              <BookingForm camper={camperDetails} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
