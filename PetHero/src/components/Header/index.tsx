import {Container, MyProfile, Icon, Left, Right} from './styles';
import {menuIcon} from '../../assets/Icons';

const Header = () => {
  return (
    <Container>
      <Left>
        <Icon source={menuIcon} />
      </Left>

      <Right>
        <MyProfile
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
        />
      </Right>
    </Container>
  );
};

export default Header;
