import {Container, Image, Title} from './styles';

const CardPet = ({name}: {name: string}) => {
  return (
    <Container>
      <Image />
      <Title>{name}</Title>
    </Container>
  );
};

export default CardPet;
