import Pet from '../../interfaces/pet';
import {api} from '../../services/api';

class PetRequests {
  public async getPets() {
    try {
      const response: Pet[] = await api.get('/Pet');
      return response;
    } catch (error) {
      console.log('ERRO ao buscar por pets cadastrados!', error);
      return [];
    }
  }

  public async createPet(
    name: string,
    gender: string,
    type: string,
    birthday: number,
  ) {
    try {
      const payload = {
        name: name,
        gender: gender,
        type: type,
        birthday: birthday,
      };

      const response = await api.post('/Pet', payload);
      return response;
    } catch (error) {
      console.log('ERRO ao cadastrar pet!', error);
      return 'Erro';
    }
  }

  public async updatePet(
    id: string,
    name: string,
    gender: string,
    type: string,
    birthday: number,
  ) {
    try {
      const payload = {
        id: id,
        name: name,
        gender: gender,
        type: type,
        birthday: birthday,
      };

      const response = await api.put('/Pet', payload);
      return response;
    } catch (error) {
      console.log('ERRO ao atualizar pet!', error);
      return 'Erro';
    }
  }

  public async deletePet(id: string) {
    try {
      const response = await api.delete('/Pet/' + id);
      return response;
    } catch (error) {
      console.log('ERRO ao deletar pet!', error);
      return 'Erro';
    }
  }
}

export default new PetRequests();
