import NavItem from '../../components/Nav';
import {Container, Title} from './styles';

const Pets = () => {
  const currentSection = 'Gatos';
  return (
    <Container>
      <Title>Pets.</Title>
      <NavItem currentSection={currentSection} />
    </Container>
  );
};

Pets.navigationOptions = {
  title: 'Pets',
};

export default Pets;
