import React, { useEffect, useState } from 'react';
import Select from './components/Select';
import Table from './components/TableList';

import Animals from './apifake/Animals';
import Owners from './apifake/Owners';
import Report from './apifake/Report';

import './style.css';
import IOwner from './apifake/Interfaces/IOwner';
import IAnimal from './apifake/Interfaces/IAnimal';
import IReport from './apifake/Interfaces/IReport';

function App() {
  const [owners, setOwners] = useState<IOwner[]>([]);
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [reportList, setReportList] = useState<IReport[]>([]);

  const ownerApi: Owners = new Owners();
  const animalApi: Animals = new Animals();
  const reportApi: Report = new Report(); 

  useEffect(() => {
    const getOwners = async () => {
      const response = await ownerApi.getAll();
      setOwners(response);
    };

    getOwners();
  }, []);

  useEffect(() => {
    const getAnimals = async () => {
      const response = await animalApi.getByOwnerId(1);
      setAnimals(response);
    };

    getAnimals();
  }, []);

  const getAnimalCount = async() => {
    const response = await reportApi.getReport();
    setReportList(response);
      
  };

  const changeOwner = async (ownerId: number): Promise<void> => {
    const response = await animalApi.getByOwnerId(ownerId);
    setAnimals(response);
  };

  return (
    <div className="App">
      <section id="owners-section">
        <label htmlFor="owners">Donos:</label>
        <Select id="owners" handleChange={changeOwner}>
          {owners.map((owner: IOwner) => (
            <option key={owner.id} value={owner.id}>
              {owner.name}
            </option>
          ))}
        </Select>
      </section>
      <section id="animals-section">
        <label htmlFor="animals">Animais:</label>
        <Select id="animals" handleChange={() => {}}>
          {animals.map((animal: IAnimal) => (
            <option key={animal.id} value={animal.id}>
              {animal.name}
            </option>
          ))}
        </Select>
      </section>
      <section id="report">
        <button onClick={getAnimalCount}>Ordenar donos com mais animais</button>
        {reportList && (
          <Table report={reportList} />
        )}
      </section>
    </div>
  );
}

export default App;
