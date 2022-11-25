import styled from '@emotion/styled';

export const Status = styled.span`
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  margin-right: 10px;
  composes: status;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'black';
    }
  }};
`;

export const Avatar = styled.img`
  margin-right: 10px;
  border-radius: 5px;
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
