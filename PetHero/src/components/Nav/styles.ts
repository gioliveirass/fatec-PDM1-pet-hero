import {Text, ScrollView, View} from 'react-native';
import styled from 'styled-components';

interface ItemProps {
  currentSection: string;
  label: string;
}

export const Container = styled(ScrollView)`
  width: 85%
  height: 70px
  margin: 24px
  flexDirection: row
`;

export const Item = styled(View)<ItemProps>`
  width: auto
  height: 100%

  alignItems: center
  justifyContent: center;

  padding: 1px 14px
  margin: 5px 9px

  backgroundColor: ${props =>
    props.currentSection === props.label ? 'rgba(255, 115, 34, 0.2)' : '#FFFF'}
  border: ${props =>
    props.currentSection === props.label
      ? '1px solid #FF7322'
      : '1px solid #E2E2E2'}
  borderRadius: 16px
`;

export const Label = styled(Text)`
  fontFamily: 'Rubik'
  fontSize: 18px
  fontStyle: normal
  fontWeight: 400
`;
