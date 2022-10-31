import Pets from './pages/Pets';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

const Routes = createAppContainer(
  createSwitchNavigator({
    Pets: Pets,
  }),
);

export default Routes;
