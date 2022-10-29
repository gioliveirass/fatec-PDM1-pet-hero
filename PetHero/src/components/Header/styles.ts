import {Image, View} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  width: 100%
  height: 50px

  flexDirection: row
  justifyContent: space-between
  alignItems: center

  padding: 0 16px
`;

export const MyProfile = styled(Image)`
  width: 30px
  height: 30px
  borderRadius: 15px
`;

export const Menu = styled(Image)`
  width: 30px
  height: 30px
`;

export const Notification = styled(Image)`
  width: 30px
  height: 30px
  margin: 0 16px 0 0
`;

export const Right = styled(View)`
    flexDirection: row
    gap: 16px
`;

export const Left = styled(View)``;
