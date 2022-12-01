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
} from './styles';
import Footer from '../../components/Footer';
import {TouchableOpacity} from 'react-native';

const Pets = ({navigation}: {navigation: any}) => {
  const [currentSection, setCurrentSection] = useState<string>('Todos');
  const labels = ['Todos', 'Gatos', 'Cães', 'Aves', 'Roedores'];
  const [pets, setPets] = useState<Pet[]>([]);

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
    <Container>
      <Title>Pets.</Title>
      <Nav onclick={onClick} labels={labels} currentSection={currentSection} />
      <PetsContainer>
        {pets.length === 0 ? (
          <NoPetsContainer>
            <NoPets>Nenhum pet foi encontrado.</NoPets>
          </NoPetsContainer>
        ) : (
          pets.map((pet, index) => <CardPet key={index} name={pet.name} />)
        )}
      </PetsContainer>

      <TouchableOpacity onPress={() => navigation.navigate('CreatePet')}>
        <Footer />
      </TouchableOpacity>
    </Container>
  );
};

Pets.navigationOptions = {
  title: 'Pets',
};

export default Pets;
