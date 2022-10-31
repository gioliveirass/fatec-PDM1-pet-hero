import {Text} from 'react-native';
import {Container, Title} from './styles';

const Homepage = () => {
  return (
    <Container>
      <Title>Homepage</Title>
    </Container>
  );
};

Homepage.navigationOptions = {
  title: 'Homepage',
};

export default Homepage;
