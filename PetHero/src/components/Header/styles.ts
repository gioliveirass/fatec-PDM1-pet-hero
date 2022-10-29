import {Image, View} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  background-color: red;
  width: 100%;
  height: 50px;

  flexdirection: row;
  justifycontent: space-between;
`;

export const MyProfile = styled(Image)`
  width: 30px;
  height: 30px;
`;

export const Icon = styled(Image)`
  width: 30px;
  height: 30px;
`;

export const Right = styled(View)`
  flex: 1;
`;

export const Left = styled(View)`
  flex: 2;
`;
