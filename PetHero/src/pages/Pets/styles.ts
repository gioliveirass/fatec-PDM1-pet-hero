import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  width: 100%
  padding: 0 16px
  flex: 1
`;

export const NoPetsContainer = styled(View)`
  width: 100%
  height: 400px
  margin: 0 0 24px 0
  borderRadius: 12px
`;

export const NoPets = styled(Text)`
  fontFamily: 'Rubik'
  fontSize: 18px
  fontStyle: normal
  color: #5F5B5B
`;

export const Title = styled(Text)`
  fontFamily: 'Rubik'
  fontSize: 36px
  fontStyle: normal
  fontWeight: 700
  color: #5F5B5B
  margin: 16px 0 0 0
`;

export const PetsContainer = styled(ScrollView)``;
