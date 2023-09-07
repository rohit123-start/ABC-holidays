// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/posts'; // Replace with your API URL

export const getAllItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.array();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const createItem = async (newItem) => {
  try {
    console.log("done")
    const response = await axios.post(`${API_BASE_URL}`, newItem);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
  }
};

export const updateItem = async (updatedItem) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/${updatedItem.id}`,
      updatedItem
    );
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error);
  }
};

export const deleteItem = async (itemId) => {
  try {
    await axios.delete(`${API_BASE_URL}/${itemId}`);
  } catch (error) {
    console.error('Error deleting item:', error);
  }
};
