import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 300px;
  font-size: 16px;
  margin-top: 20px;
  border-collapse: collapse;
  background-color: rgba(116, 185, 255, 0.3);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
`;

// td,
// th {
//   padding: 5px 33px;

//   text-align: left;
//   text-transform: capitalize;
//   color: gray;
// }

export const Td = styled.td`
  padding: 5px 33px;

  text-align: left;
  text-transform: capitalize;
  color: gray;
`;

export const Th = styled.th`
  padding: 5px 33px;

  text-align: left;
  text-transform: capitalize;
  color: gray;
`;

export const Thead = styled.thead`
  box-shadow: 0 3px 6px #00000030;
  background-color: royalblue;
`;

export const Tr = styled.tr`
  &:nth-of-type(even) {
    background-color: rgba(116, 185, 255, 0.6);
  }
`;
