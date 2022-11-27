import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  box-shadow: 0 3px 6px #00000030;
  background: linear-gradient(130deg, rgb(116, 185, 255), #e66767);
  border: 2px solid rgba(116, 185, 255, 0.6);
`;
