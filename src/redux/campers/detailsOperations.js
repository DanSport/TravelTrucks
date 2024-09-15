import axios from 'axios';

export const fetchCamperDetails = async id => {
  return (await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`)).data;
};
