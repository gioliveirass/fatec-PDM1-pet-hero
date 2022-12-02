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
  ButtonCustomn,
} from './styles';
import {useState} from 'react';
import {backBtn} from '../../assets/Icons';
import PetRequests from '../../utils/requests/Pet.request';

const UpdatePet = ({navigation}: {navigation: any}) => {
  const [petName, setPetName] = useState<string>('');

  const createPet = async () => {
    const body = {
      id: '124',
      name: petName,
      gender: 'F',
      type: 'Gato',
      birthday: 0,
    };

    const response = await PetRequests.updatePet(
      body.id,
      body.name,
      body.gender,
      body.type,
      body.birthday,
    );
  };

  const deletePet = async () => {
    const body = {
      id: '124',
    };

    const response = await PetRequests.deletePet(body.id);
  };

  return (
    <>
      <Container>
        <ContainerHeader>
          <TouchableOpacityCustom onPress={() => navigation.navigate('Pets')}>
            <Back source={backBtn} />
          </TouchableOpacityCustom>
          <Title>Editar dados do Pet</Title>
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
          <ButtonCustomn
            title="Atualizar pet"
            color="#5EBC82"
            onPress={() => createPet()}
          />

          <ButtonCustomn
            title="Deletar pet"
            color="#EA6262"
            onPress={() => deletePet()}
          />
        </ContainerButtons>
      </Container>
    </>
  );
};

UpdatePet.navigationOptions = {
  title: 'UpdatePet',
};

export default UpdatePet;
