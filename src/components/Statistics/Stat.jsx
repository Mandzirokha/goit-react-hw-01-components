import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Stat = ({ stat: { label, percentage } }) => {
  return (
    <div>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </div>
  );
};

Stat.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
