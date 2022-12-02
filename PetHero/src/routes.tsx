import Pets from './pages/Pets';
import CreatePet from './pages/CreatePet';
import UpdatePet from './pages/UpdatePet';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

const Routes = createAppContainer(
  createSwitchNavigator({
    Pets: Pets,
    CreatePet: CreatePet,
    UpdatePet: UpdatePet,
  }),
);

export default Routes;
