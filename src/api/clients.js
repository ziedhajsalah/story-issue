import { api } from '../utils/config';

export const getAllClients = () => fetch(`${api}/clients`);

export const postClient = async data => {
  const response = await fetch(`${api}/clients`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.status === 201) {
    return await response.json();
  }
  throw Error('Signup Error!!');
};

export const putClient = (id, data) =>
  fetch(`${api}/clients/${id}`, {
    method: 'put',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

export const delClient = id =>
  fetch(`${api}/clients/${id}`, {
    method: 'delete',
    headers: {
      'content-type': 'application/json',
    },
  });
