import React from 'react';

import PetListItem from './PetListItem';

const PetList = ({ pets }) => (
  <div>
    <h2>Current Pets</h2>
    <ul>
      {pets.map(pet => <PetListItem key={pet.name} pet={pet} />)}
    </ul>
  </div>
);

export default PetList;
