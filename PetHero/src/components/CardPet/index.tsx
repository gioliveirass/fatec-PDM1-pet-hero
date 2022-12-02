import {catImage} from '../../assets/Icons';
import {Container, Image, Title, PetInfo} from './styles';

const CardPet = ({name}: {name: string}) => {
  return (
    <Container>
      <Image resizeMode="cover" source={catImage} />
      <PetInfo>
        <Title>{name}</Title>
      </PetInfo>
    </Container>
  );
};

export default CardPet;
