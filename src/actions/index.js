export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const toggleEditForm = () => ({
  type: 'TOGGLE_EDIT_FORM'
});

export const pullKeg = () => ({
  type: 'PULL_KEG'
});

export const addKeg = (keg) => {
  const { name, brand, price, flavor, capacity, howMuchLeft, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    capacity: capacity,
    howMuchLeft: howMuchLeft,
    id: id
  }
}