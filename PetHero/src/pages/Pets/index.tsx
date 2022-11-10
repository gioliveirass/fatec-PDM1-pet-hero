import {useState} from 'react';
import Nav from '../../components/Nav';
import {Container, Title} from './styles';

const Pets = () => {
  const [currentSection, setCurrentSection] = useState<string>('Todos');
  const labels = ['Todos', 'Gatos', 'Cães', 'Aves', 'Roedores'];

  const onClick = (label: string) => {
    setCurrentSection(label);
  };

  return (
    <Container>
      <Title>Pets.</Title>
      <Nav onclick={onClick} labels={labels} currentSection={currentSection} />
    </Container>
  );
};

Pets.navigationOptions = {
  title: 'Pets',
};

export default Pets;
