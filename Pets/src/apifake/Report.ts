import IReport from './Interfaces/IReport';

import Animals from '../apifake/Animals';
import Owners from '../apifake/Owners';

const ownerApi: Owners = new Owners();
const animalApi: Animals = new Animals();

export default class Report {
  async getReport(): Promise<IReport[]> {
    const owners = await ownerApi.getAll();

    let animalsByOwner: IReport[] = await Promise.all(owners.map(async (owner) => {
      const animals = await animalApi.getByOwnerId(owner.id);
      return {
          ownerId: owner.id,
          ownerName: owner.name,
          animalsCount: animals.length
        }
    }));
    
    animalsByOwner.sort((ownerA: IReport, ownerB: IReport) => {
      return ownerB.animalsCount - ownerA.animalsCount;
    });
    return animalsByOwner;
  }

}