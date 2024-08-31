import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-zeta-gold.vercel.app/api', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getRequest = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response;
  } catch (error) {
    throw error;
  }
};

export const postRequest = async (endpoint,data) => {
  try {
    const response = await api.post(endpoint, data);
    console.log("Respmmmmmmm 2222222",response)
    return response;
  } catch (error) {
    throw error;
  }
};


export const putRequest = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteRequest = async (endpoint,data) => {
  try {
    const response = await api.delete(endpoint,data);
    return response.data;
  } catch (error) {
    throw error;
  }
};