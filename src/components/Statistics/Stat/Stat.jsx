import PropTypes from 'prop-types';
import { StatLabel, StatPercentage } from './Stat.styled';

export const Stat = ({ stat: { label, percentage } }) => {
  return (
    <>
      <StatLabel>{label}</StatLabel>
      <StatPercentage>{percentage}</StatPercentage>
    </>
  );
};

Stat.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
