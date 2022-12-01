import {View, Text} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  width: 100%
  height: 400px
  margin: 0 0 24px 0
  backgroundColor: #F4EBF7
  borderRadius: 12px
  border: 1px solid #D3B0E0
`;

export const Image = styled(View)`
  width: 100%
  height: 80%
  backgroundColor: #D3B0E0
  borderRadius: 12px
  borderBottomEndRadius: 80px
  border: 1px solid #D3B0E0
`;

export const Title = styled(Text)`
  fontFamily: 'Rubik'
  fontSize: 24px
  fontStyle: normal
  fontWeight: 700
  color: #5F5B5B
  margin: 16px 8px
`;
