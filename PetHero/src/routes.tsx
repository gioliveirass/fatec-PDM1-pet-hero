import Pets from './pages/Pets';
import CreatePet from './pages/CreatePet';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

const Routes = createAppContainer(
  createSwitchNavigator({
    Pets: Pets,
    CreatePet: CreatePet,
  }),
);

export default Routes;
