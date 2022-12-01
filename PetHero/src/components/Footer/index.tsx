import {Container, CreatePet} from './styles';
import {createBtn} from '../../assets/Icons';

const Footer = () => {
  return (
    <Container>
      <CreatePet source={createBtn} />
    </Container>
  );
};

export default Footer;
