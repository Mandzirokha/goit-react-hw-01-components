import PropTypes from 'prop-types';

import {
  StatisticsSection,
  Title,
  StatisticsList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id}>
              <StatLabel>{label}</StatLabel>
              <StatPercentage>{percentage}</StatPercentage>
            </StatItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
