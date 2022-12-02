import React, {useEffect, useState} from 'react';
import Nav from '../../components/Nav';
import CardPet from '../../components/CardPet';
import Pet from '../../interfaces/pet';
import PetRequests from '../../utils/requests/Pet.request';
import {
  Container,
  Title,
  NoPets,
  PetsContainer,
  NoPetsContainer,
  ContainerHeader,
  MyProfile,
  Menu,
  Notification,
  Left,
  Right,
  ContainerFooter,
  CreatePet,
  MenuIcons,
} from './styles';
import {
  menuIcon,
  notificationIcon,
  createBtn,
  petsIcon,
  itensIcon,
  homepageIcon,
  contatosIcon,
} from '../../assets/Icons';
import {TouchableOpacity} from 'react-native';

const Pets = ({navigation}: {navigation: any}) => {
  const [currentSection, setCurrentSection] = useState<string>('Gatos');
  const labels = ['Todos', 'Gatos', 'Cães', 'Aves', 'Roedores'];
  const [pets, setPets] = useState<Pet[]>([]);

  const mock: Pet[] = [
    {
      image: 'any',
      type: 'Gato',
      name: 'Akame',
      gender: 'F',
      age: 9,
    },
    {
      image: 'any',
      type: 'Gato',
      name: 'Meilis',
      gender: 'F',
      age: 0,
    },
    {
      image: 'any',
      type: 'Gato',
      name: 'Maeven',
      gender: 'M',
      age: 0,
    },
  ];

  useEffect(() => {
    getPets();
  }, []);

  const onClick = (label: string) => {
    setCurrentSection(label);
  };

  const getPets = async () => {
    const response = await PetRequests.getPets();
    setPets(response);
  };

  return (
    <>
      <ContainerHeader>
        <Left>
          <Menu source={menuIcon} />
        </Left>

        <Right>
          <Notification source={notificationIcon} />
          <MyProfile
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
          />
        </Right>
      </ContainerHeader>

      <Container>
        <Title>Pets.</Title>
        <Nav
          onclick={onClick}
          labels={labels}
          currentSection={currentSection}
        />
        <PetsContainer>
          {mock.length === 0 ? (
            <NoPetsContainer>
              <NoPets>Nenhum pet foi encontrado.</NoPets>
            </NoPetsContainer>
          ) : (
            mock.map((pet, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('UpdatePet')}>
                <CardPet name={pet.name} />
              </TouchableOpacity>
            ))
          )}
        </PetsContainer>
      </Container>

      <ContainerFooter>
        <MenuIcons source={homepageIcon} />
        <MenuIcons source={petsIcon} />
        <TouchableOpacity onPress={() => navigation.navigate('CreatePet')}>
          <CreatePet source={createBtn} />
        </TouchableOpacity>
        <MenuIcons source={itensIcon} />
        <MenuIcons source={contatosIcon} />
      </ContainerFooter>
    </>
  );
};

Pets.navigationOptions = {
  title: 'Pets',
};

export default Pets;
