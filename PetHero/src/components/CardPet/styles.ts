import {View, Text, ImageBackground} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  width: 100%
  height: 300px
  margin: 0 0 24px 0
  backgroundColor: #F4EBF7
  borderRadius: 12px
  border: 1px solid #D3B0E0
`;

export const PetInfo = styled(View)`
  flexdirection: row;
  alignitems: center;
`;

export const Image = styled(ImageBackground)`
  width: 100%
  height: 100%
  flex: 1
`;

export const Title = styled(Text)`
  fontFamily: 'Rubik'
  fontSize: 24px
  fontStyle: normal
  fontWeight: 700
  color: #5F5B5B
  margin: 16px 8px
`;
