import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  width: 400px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
`;

export const Description = styled.div`
  background-color: rgba(116, 185, 255, 0.6);
  padding: 60px 40px;
`;

export const Name = styled.p`
  color: #f2f2f2;
  font-size: 28px;
  font-weight: 600;
  margin: 10px 0;
`;

export const Tag = styled.p`
  font-size: 18px;
  color: #e66767;
  padding: 10px;
`;

export const Location = styled.p`
  font-size: 18px;
  color: #e66767;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  background: #f4f4f4;
  padding: 10px;
  border: 2px solid rgba(116, 185, 255, 0.6);
`;

export const Label = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  color: #2c3a47;
`;

export const Quantity = styled.span`
  display: block;
  color: #e66767;
  font-size: 25px;
`;

export const Avatar = styled.img`
  display: inline-block;
  padding: 8px;
  background: linear-gradient(130deg, rgb(116, 185, 255), #e66767);
  margin: auto;
  border-radius: 50%;
  background-size: 200% 200%;
  width: 200px;
  height: 200px;
`;
