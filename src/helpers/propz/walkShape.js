import PropTypes from 'prop-types';

const walkShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  dogId: PropTypes.string.isRequired,
  employeeId: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
});

export default { walkShape };
