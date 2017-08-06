/* eslint-disable no-underscore-dangle */
import R from 'ramda';

export const findAndReplaceClient = (clients, client) => {
  const index = R.findIndex(R.propEq('_id', client._id))(clients);
  return [...clients.slice(0, index), client, ...clients.slice(index + 1)];
};

export const findAndRemoveClient = (clients, id) => {
  const index = R.findIndex(R.propEq('_id', id))(clients);
  return [...clients.slice(0, index), ...clients.slice(index + 1)];
};
