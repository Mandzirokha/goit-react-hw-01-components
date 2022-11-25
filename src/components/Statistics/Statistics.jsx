import { Stat } from './Stat/Stat';
import {
  StatisticsSection,
  Title,
  StatisticsList,
  StatItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <Title>{title}</Title>

      <StatisticsList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id}>
              <Stat stat={stat} />
            </StatItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};
