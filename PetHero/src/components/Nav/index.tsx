import NavItem from '../NavItem';
import {Container} from './styles';

interface NavProps {
  currentSection: string;
}

const Nav = ({currentSection}: NavProps) => {
  return (
    <Container>
      <NavItem currentSection={currentSection} label={'Todos'} />
      <NavItem currentSection={currentSection} label={'Gatos'} />
    </Container>
  );
};

export default Nav;
