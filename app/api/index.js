import qs from 'qs';

const REQUEST_URL = `http://118.25.190.29:4000`;

export const getHistory = () => fetch(`${REQUEST_URL}/history`);

export const getDetail = id => fetch(`${REQUEST_URL}/history${id}`);

export const createCheck = (
  text,
  programmingCode,
  loss,
  author,
  level,
  place
) =>
  fetch(`${REQUEST_URL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: qs.stringify({
      text,
      level,
      programmingCode,
      loss,
      author,
      place
    })
  });
