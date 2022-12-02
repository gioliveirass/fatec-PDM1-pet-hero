import {View, Text, ScrollView, Image} from 'react-native';
import styled from 'styled-components';

export const ContainerHeader = styled(View)`
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

export const ContainerFooter = styled(View)`
  width: 100%
  height: 50px

  flexDirection: row
  justifyContent: center
  alignItems: center

  margin: 12px 0
`;

export const CreatePet = styled(Image)``;

export const MenuIcons = styled(Image)`
  margin: 0 16px;
`;

export const PetsContainer = styled(ScrollView)``;
