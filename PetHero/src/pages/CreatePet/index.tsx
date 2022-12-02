import {
  Container,
  Title,
  Back,
  ContainerHeader,
  TouchableOpacityCustom,
  Form,
  Label,
  TextInputCustom,
  ContainerButtons,
} from './styles';
import {Button} from 'react-native';
import {useState} from 'react';
import {backBtn} from '../../assets/Icons';
import PetRequests from '../../utils/requests/Pet.request';

const CreatePet = ({navigation}: {navigation: any}) => {
  const [petName, setPetName] = useState<string>('');

  const createPet = async () => {
    const body = {
      name: petName,
      gender: 'F',
      type: 'Gato',
      birthday: 0,
    };

    const response = await PetRequests.createPet(
      body.name,
      body.gender,
      body.type,
      body.birthday,
    );
  };

  return (
    <>
      <Container>
        <ContainerHeader>
          <TouchableOpacityCustom onPress={() => navigation.navigate('Pets')}>
            <Back source={backBtn} />
          </TouchableOpacityCustom>
          <Title>Cadastrar Pet</Title>
        </ContainerHeader>

        <Form>
          <Label>Nome do pet</Label>
          <TextInputCustom onChangeText={text => setPetName(text)} />

          <Label>Sexo do pet</Label>
          <TextInputCustom />

          <Label>Data de aniversário do pet</Label>
          <TextInputCustom />

          <Label>Raça do pet</Label>
          <TextInputCustom />
        </Form>

        <ContainerButtons>
          <Button
            title="Cadastrar pet"
            color="#5EBC82"
            onPress={() => createPet()}
          />
        </ContainerButtons>
      </Container>
    </>
  );
};

CreatePet.navigationOptions = {
  title: 'CreatePet',
};

export default CreatePet;
