const URL = 'https://rickandmortyapi.com/api';

export const request = async (url, method = 'GET', body) => {
  const data = await fetch(`${URL}${url}`, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (data.ok) {
    return data.json();
  }
  throw new Error('Sorry Api Error');
};

export const getAllCharacter = async (id) => {
  try {
    const data = await request(`/character?page=${id}`);
    return data;
  } catch (e) {
    throw new Error('Fetch all heroes failed.');
  }
};

export const getOneCharacter = async (id) => {
  try {
    const data = await request(`/character/${id}`);
    return data;
  } catch (e) {
    throw new Error(`Cannot Get current ${id} Character`);
  }
};
