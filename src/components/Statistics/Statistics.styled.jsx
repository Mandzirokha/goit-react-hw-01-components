import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  width: 400px;
  text-align: center;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 3px 6px #00000030;
  border: 2px solid rgba(116, 185, 255, 0.6);
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 24px;
  background-color: royalblue;
  padding: 10px;
  margin: 0;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  background-color: rgba(116, 185, 255, 0.6);
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding: 20px;
`;

export const StatLabel = styled.span`
  font-weight: 700;
  padding-bottom: 10px;
`;

export const StatPercentage = styled.span`
  font-weight: 700;
`;
