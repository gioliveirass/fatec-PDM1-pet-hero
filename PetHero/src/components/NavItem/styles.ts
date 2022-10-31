import {View, Text} from 'react-native';
import styled from 'styled-components';

interface ContainerProps {
  currentSection: string;
  label: string;
}

export const Container = styled(View)<ContainerProps>`
  width: auto
  height: 100%

  alignItems: center
  justifyContent: center;

  padding: 1px 14px
  margin: 3px 8px 3px 1px

  backgroundColor: ${props =>
    props.currentSection === props.label
      ? 'rgba(255, 115, 34, 0.2)'
      : 'tranparent'}
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
