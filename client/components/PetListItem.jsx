import React from 'react';

const PetListItem = ({ pet }) => (
  <li>{pet.name} - {pet.breed} - Cuteness Rating: {pet.rating}</li>
);

export default PetListItem;
