import styled from '@emotion/styled';

export const Status = styled.span`
  flex-shrink: 0;
  width: 15px;
  height: 15px;
  margin-right: 10px;

  border-radius: 50%;
`;

// .offline {
//   composes: status;
//   background-color: #ce3b3b;
// }

// .online {
//   composes: status;
//   background-color: #278145;
// }

export const Avatar = styled.img`
  margin-right: 10px;
  border-radius: 5px;
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
