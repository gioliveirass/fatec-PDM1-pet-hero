import {Container, Label} from './styles';

interface NavItemProps {
  currentSection: string;
  label: string;
}

const NavItem = ({currentSection, label}: NavItemProps) => {
  return (
    <Container currentSection={currentSection} label={label}>
      <Label>{label}</Label>
    </Container>
  );
};

export default NavItem;
