import axios from "axios";

const instance = axios.create({
  baseURL: 'https://learn.codeit.kr/api',
  timeout: 3000,
});

export async function getAvatars(params = {}) {
  // const res = await axios.get('https://learn.codeit.kr/api/avatars', {params}); //{params: params}
  const res = await instance.get('/avatars', {params});
  return res.data;
}

export async function getAvatar(id) {
  // const res = await axios(`https://learn.codeit.kr/api/avatars/${id}`);
  const res = await instance(`/avatars/${id}`);
  return res.data;
}

export async function createAvatar(avatarData) {
  // const res = await axios.post('https://learn.codeit.kr/api/avatars', avatarData);
  const res = await instance.post('/avatars', avatarData);
  return res.data;
}

export async function patchAvatar(id, avatarData) {
  // const res = await instance.patch(`https://learn.codeit.kr/api/avatars/${id}`, avatarData);
  const res = await instance.patch(`/avatars/${id}`, avatarData);
  return res.data;
}

export async function deleteAvatar(id) {
  // const res = await axios.delete(`https://learn.codeit.kr/api/avatars/${id}`);
  const res = await instance.delete(`/avatars/${id}`);
  return res.data;
}