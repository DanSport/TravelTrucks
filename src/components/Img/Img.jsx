import PropTypes from 'prop-types';

export const Img = ({ src, srcSet = '', alt = '', className = 'img', sizes = '100%' }) => {
  return <img srcSet={srcSet} sizes={sizes} src={src} alt={alt} className={className} />;
};

Img.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  sizes: PropTypes.string,
};
