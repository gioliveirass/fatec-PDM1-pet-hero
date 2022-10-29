import {Container, MyProfile, Menu, Notification, Left, Right} from './styles';
import {menuIcon, notificationIcon} from '../../assets/Icons';

const Header = () => {
  return (
    <Container>
      <Left>
        <Menu source={menuIcon} />
      </Left>

      <Right>
        <Notification source={notificationIcon} />
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
