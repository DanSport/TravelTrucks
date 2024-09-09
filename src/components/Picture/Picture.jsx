import PropTypes from 'prop-types';

export const Picture = ({ images, alt, className }) => {
  return (
    <picture>
      {images.map(image => {
        <source srcSet={image} />;
      })}
      <img src={images[0]} alt={alt} className={className} />
    </picture>
  );
};

Picture.propTypes = {
  images: PropTypes.array,
  alt: PropTypes.string,
  className: PropTypes.string,
};
