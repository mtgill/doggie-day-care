import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export default { dogShape };
