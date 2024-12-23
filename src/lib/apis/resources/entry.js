import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const RESOURCE_URL = `${BASE_URL}/entries`;

// Index
export const getEntries = async () => {
  console.log("Fetching all entries from:", RESOURCE_URL);
  try {
    const response = await axios.get(`${RESOURCE_URL}/`);
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching entries:', error);
    throw error;
  }
};

// Show
export const getEntryById = async (id) => {
  const url = `${RESOURCE_URL}/${id}`;
  console.log("Fetching entry by ID from:", url);
  try {
    const response = await axios.get(url);
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching entry by ID:', error);
    throw error;
  }
};

// Create
export const createEntry = async (entryData) => {
  console.log("Creating entry at:", RESOURCE_URL);
  try {
    const response = await axios.post(`${RESOURCE_URL}/`, entryData);
    console.log("Created entry:", response);
    return response.data;
  } catch (error) {
    console.error('Error creating entry:', error);
    throw error;
  }
};

// Edit
export const updateEntry = async (id, entryData) => {
  const url = `${RESOURCE_URL}/${id}`;
  console.log("Updating entry at:", url);
  try {
    const response = await axios.put(url, entryData);
    console.log("Updated entry:", response);
    return response.data;
  } catch (error) {
    console.error('Error updating entry:', error);
    throw error;
  }
};

// Delete 
export const deleteEntry = async (id) => {
  const url = `${RESOURCE_URL}/${id}`;
  console.log("Deleting entry at:", url);
  try {
    const response = await axios.delete(url);
    console.log("Deleted entry:", response);
    return response.data;
  } catch (error) {
    console.error('Error deleting entry:', error);
    throw error;
  }
};
