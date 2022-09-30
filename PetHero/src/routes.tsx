import Homepage from './pages/Homepage';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

const Routes = createAppContainer(
  createSwitchNavigator({
    Homepage: Homepage,
  }),
);

export default Routes;