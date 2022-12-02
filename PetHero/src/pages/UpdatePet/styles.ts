import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  width: 100%
  padding: 0 16px
  flex: 1
`;

export const ContainerButtons = styled(View)`
  margin: 16px;
`;

export const ContainerHeader = styled(View)`
  margin: 16px 0;
`;

export const Form = styled(View)`
  margin: 0 16px;
`;

export const Title = styled(Text)`
  fontFamily: 'Rubik'
  fontSize: 36px
  fontStyle: normal
  fontWeight: 700
  color: #5F5B5B
  margin: 0 16px
`;

export const Back = styled(Image)`
  margin: 0
  padding: 0
`;

export const TouchableOpacityCustom = styled(TouchableOpacity)`
  margin: 0
  padding: 0
`;

export const Label = styled(Text)`
  fontFamily: 'Rubik'
  fontSize: 18px
  fontStyle: normal
  color: #5F5B5B
`;

export const TextInputCustom = styled(TextInput)`
  margin: 8px 0
  fontFamily: 'Rubik'
  fontSize: 18px
  fontStyle: normal
  backgroundColor: #FEF6ED
  borderRadius: 12px
  border: 1px solid #FABD7C
`;

export const ButtonCustomn = styled(Button)`
  margin: 18px 0;
`;
